import bodyParser from "body-parser";
import { Express } from "express";
import prisma from "../database/prismaClient";

const jsonParser = bodyParser.json();

/**
 * Defines each route of the API on an Express app object
 * Documentation for each route available at:
 * https://github.com/leoboyerbx/toodoo/blob/main/server/README.md
 *
 * @param app
 */
export default function setupRoutes(app: Express): void {
  /**
   * Get all games
   * @route "/games"
   */
  app.get("/games", async (req, res) => {
    const games = await prisma.game.findMany({});
    res.json(games);
  });

  /**
   * Get a game with a his ID
   * @route "/games/<id>"
   * @param id
   */
  app.get("/games/:id", async (req, res) => {
    const {id} = req.params;
    const games = await prisma.game.findMany({
      where: {
        id: Number(id),
      },
    });
    res.json(games);
  });

  /**
   * Get all teams
   * @route "/teams"
   */
  app.get("/teams", async (req, res) => {
    const teams = await prisma.team.findMany({
      include: {
        players: true,
      },
    });
    res.json(teams);
  });

  /**
   * Get a team with a his ID
   * @route "/teams/<id>"
   * @param id
   */
  app.get("/teams/:id", async (req, res) => {
    const {id} = req.params;
    const team = await prisma.team.findUnique({
      where: {
        id: Number(id),
      },
      include: {
        players: true,
        games: true,
      },
    });
    res.json(team);
  });

  /**
   * Get all players
   * @route "/players"
   */
  app.get("/players", async (req, res) => {
    const players = await prisma.player.findMany();
    res.json(players);
  });

  /**
   * Get a player with his ID
   * @route "/players/<id>"
   * @param id
   */
  app.get("/players/:id", async (req, res) => {
    const {id} = req.params;
    const player = await prisma.player.findUnique({
      where: {
        id: Number(id),
      },
      include: {
        assignedMissions: true,
        completeMissions: true,
      },
    });
    res.json(player);
  });

  /**
   * Get all players of a team with the team ID
   * @route "/players/team/<id>"
   * @param id
   */
  app.get("/players/team/:teamId", async (req, res) => {
    const {teamId} = req.params;
    const players = await prisma.player.findMany({
      where: {
        teamId: Number(teamId),
      },
      include: {
        assignedMissions: true,
        completeMissions: {
          include: {
            mission: true
          }
        },
      },
    });
    res.json(players);
  });

  /**
   * Get all missions
   * @route "/missions"
   */
  app.get("/missions", async (req, res) => {
    const missions = await prisma.mission.findMany();
    res.json(missions);
  });

  /**
   * Get a mission with his ID
   * @route "/missions/<id>"
   * @param id
   */
  app.get("/missions/:id", async (req, res) => {
    const {id} = req.params;
    const missions = await prisma.mission.findMany({
      where: {
        id: Number(id),
      },
    });
    res.json(missions);
  });

  /**
   * Get all missions of a game with the game ID
   * @route "/missions/game/<id>"
   * @param id
   */
  app.get("/missions/game/:gameId", async (req, res) => {
    const {gameId} = req.params;
    const missions = await prisma.mission.findMany({
      where: {
        gameId: Number(gameId),
      },
      include: {
        missionCompletion: true,
        assignPlayer: true,
      },
    });
    res.json(missions);
  });

  /**
   * Get all missions of a player with the player ID
   * @route "/missions/player/<id>"
   * @param id
   */
  app.get("/missions/player/:playerId", async (req, res) => {
    const {playerId} = req.params;
    const missions = await prisma.mission.findMany({
      where: {
        assignTo: Number(playerId),
      },
    });
    res.json(missions);
  });

  /**
   * Post a new mission completion
   * @param missionId, completeBy, completeDay
   */
  app.post(`/mission-completion`, jsonParser, async (req, res) => {
    const {missionId, completeBy, completeDay, teamId, gameId} = req.body;
    const result = await prisma.missionCompletion.create({
      data: {
        missionId: missionId,
        completeBy: completeBy,
        completeDay: completeDay,
      },
    });
    const missions = await prisma.mission.findMany({
      where: {
        gameId: Number(gameId),
      },
      include: {
        missionCompletion: true,
        assignPlayer: true,
      },
    });
    const players = await prisma.player.findMany({
      where: {
        teamId: Number(teamId),
      },
      include: {
        assignedMissions: true,
        completeMissions: true,
      },
    });
    res.json({missions: missions, players: players});
  });

  /**
   * Create a new mission
   * @param name, ponctual, gameId
   */
  app.post(`/missions`, jsonParser, async (req, res) => {
    const {name, ponctual, gameId} = req.body;
    const result = await prisma.mission.create({
      data: {
        name: name,
        ponctual: ponctual,
        active: false,
        gameId: gameId,
      },
    });
    const missions = await prisma.mission.findMany({
      where: {
        gameId: Number(gameId),
      },
      include: {
        missionCompletion: true,
        assignPlayer: true,
      },
    });
    res.json(missions)
  });

  /**
   * Assign player to a mission
   * @param missionId, playerId, gameId
   */
  app.put('/assignMission', jsonParser, async (req, res) => {
    const {missionId, playerId, gameId} = req.body
    await prisma.mission.update({
      where: { id : missionId},
      data: { assignTo: playerId},
    })
    const missions = await prisma.mission.findMany({
      where: {
        gameId: Number(gameId),
      },
      include: {
        missionCompletion: true,
        assignPlayer: true,
      },
    });
    res.json(missions)
  })
  /**
   * Assign player to a mission
   * @param missionId, active, gameId
   */
  app.put('/activateMission', jsonParser, async (req, res) => {
    const {missionId, active, gameId} = req.body
    await prisma.mission.update({
      where: { id : missionId},
      data: { active: active},
    })
    const missions = await prisma.mission.findMany({
      where: {
        gameId: Number(gameId),
      },
      include: {
        missionCompletion: true,
        assignPlayer: true,
      },
    });
    res.json(missions)
  })
}
