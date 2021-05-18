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
  app.get("/games", async (req, res) => {
    const games = await prisma.game.findMany({});
    res.json(games);
  });

  app.get("/games/:id", async (req, res) => {
    const { id } = req.params;
    const games = await prisma.game.findMany({
      where: {
        id: Number(id),
      },
    });
    res.json(games);
  });

  app.get("/teams", async (req, res) => {
    const teams = await prisma.team.findMany({
      include: {
        players: true,
      },
    });
    res.json(teams);
  });

  app.get("/teams/:id", async (req, res) => {
    const { id } = req.params;
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

  app.get("/players", async (req, res) => {
    const players = await prisma.player.findMany();
    res.json(players);
  });

  app.get("/players/:id", async (req, res) => {
    const { id } = req.params;
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

  app.get("/players/team/:teamId", async (req, res) => {
    const { teamId } = req.params;
    const players = await prisma.player.findMany({
      where: {
        teamId: Number(teamId),
      },
      include: {
        assignedMissions: true,
        completeMissions: true,
      },
    });
    res.json(players);
  });

  app.get("/missions", async (req, res) => {
    const missions = await prisma.mission.findMany();
    res.json(missions);
  });

  app.get("/missions/:id", async (req, res) => {
    const { id } = req.params;
    const missions = await prisma.mission.findMany({
      where: {
        id: Number(id),
      },
    });
    res.json(missions);
  });

  app.get("/missions/game/:gameId", async (req, res) => {
    const { gameId } = req.params;
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

  app.get("/missions/player/:playerId", async (req, res) => {
    const { playerId } = req.params;
    const missions = await prisma.mission.findMany({
      where: {
        assignTo: Number(playerId),
      },
    });
    res.json(missions);
  });

  app.post(`/mission-completion`, jsonParser, async (req, res) => {
    const { missionId, completeBy, completeDay, teamId, gameId } = req.body;
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
    res.json({ missions: missions, players: players });
  });
}
