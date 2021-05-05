import dotenvFlow from 'dotenv-flow';
dotenvFlow.config();

import { createServer } from 'http'
import { PrismaClient } from '@prisma/client'
import express from 'express'
import {Server, Socket} from 'socket.io'
import ClientSocket from './realtime-game/sockets/ClientSocket';
import cors from 'cors';
import bodyParser from 'body-parser'
const app = express();
const serverPort = 7554;

const jsonParser = bodyParser.json()
const server = createServer(app);
const io = new Server(server, {
  cors: {
    origin: "*",
    methods: ["GET", "POST"]
  }
});
app.use(cors())
app.use(express.static(`${__dirname}/public`));

io.sockets.on('connection', (socket: Socket) => {
  new ClientSocket(socket)
});

const prisma = new PrismaClient()

app.use(express.static(`${__dirname}/public`));

app.get('/games', async (req, res) => {
  const games = await prisma.game.findMany({})
  res.json(games)
})

app.get('/games/:id', async (req, res) => {
  const { id } = req.params
  const games = await prisma.game.findMany({
    where: {
      id: Number(id)
    },
  })
  res.json(games)
})

app.get('/teams', async (req, res) => {
  const teams = await prisma.team.findMany({
    include: {
      players: true
    },
  })
  res.json(teams)
})

app.get('/teams/:id', async (req, res) => {
  const { id } = req.params
  const team = await prisma.team.findUnique({
    where: {
      id: Number(id)
    },
    include: {
      players: true,
      games: true
    },
  })
  res.json(team)
})

app.get('/players', async(req, res) => {
  const players = await prisma.player.findMany()
  res.json(players)
})

app.get('/players/:id', async(req, res) => {
  const { id } = req.params
  const player = await prisma.player.findUnique({
    where: {
      id: Number(id)
    },
    include: {
      assignedMissions: true,
      completeMissions: true
    },
  })
  res.json(player)
})

app.get('/players/team/:teamId', async(req, res) => {
  const { teamId } = req.params
  const players = await prisma.player.findMany({
    where: {
      teamId: Number(teamId)
    },
    include: {
      assignedMissions: true,
      completeMissions: true
    },
  })
  res.json(players)
})

app.get('/missions', async(req, res) => {
  const missions = await prisma.mission.findMany()
  res.json(missions)
})

app.get('/missions/:id', async(req, res) => {
  const { id } = req.params
  const missions = await prisma.mission.findMany({
    where: {
      id: Number(id)
    }
  })
  res.json(missions)
})

app.get('/missions/game/:gameId', async(req, res) => {
  const { gameId } = req.params
  const missions = await prisma.mission.findMany({
    where: {
      gameId: Number(gameId)
    }
  })
  res.json(missions)
})

app.get('/missions/player/:playerId', async(req, res) => {
  const { playerId } = req.params
  const missions = await prisma.mission.findMany({
    where: {
      assignTo: Number(playerId)
    }
  })
  res.json(missions)
})

app.post(`/mission-completion`, jsonParser, async (req, res) => {
  const { missionId, completeBy, completeDay } = req.body
  const result = await prisma.missionCompletion.create ({
    data: {
      missionId: missionId,
      completeBy: completeBy,
      completeDay: completeDay
    },
  })
  const missions = await prisma.mission.findMany()
  const players = await prisma.player.findMany()
  res.json({missions: missions, players: players})
})

// function bindInGameEvents(socket, room) {
//   socket.on('game-data', (data) => {
//     const fullData = {
//       ...data,
//       fromType: socket.clientType,
//     };
//     io.to(room).emit('game-data', fullData);
//   });
// }
//
// io.sockets.on('connection', (socket) => {
//   socket.on('config', (config) => {
//     const room = config.id;
//     socket.leaveAll();
//     socket.join(room);
//     // eslint-disable-next-line no-param-reassign
//     socket.clientType = config.type;
//     console.log(`A client joined room ${room} as ${socket.clientType}`);
//
//     const clientsInRoom = Array.from(io.sockets.adapter.rooms.get(room));
//     const clientTypes = clientsInRoom.map((clientId) => {
//       const client = io.sockets.sockets.get(clientId);
//       return client.clientType;
//     });
//     bindInGameEvents(socket, room);
//     if (clientTypes.includes('cast') && clientTypes.includes('player')) {
//       io.to(room).emit('ready');
//     }
//   })
//     .on('disconnect', () => {
//     });
// });

server.listen(serverPort, () => {
  console.log('server up and running at %s port', serverPort);
});
