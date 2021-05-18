import dotenvFlow from "dotenv-flow";
dotenvFlow.config();

import { createServer } from "http";
import express from "express";
import { Server, Socket } from "socket.io";
import ClientSocket from "./realtime-game/sockets/ClientSocket";
import cors from "cors";
import setupRoutes from "./api/routes";

// Server config
const app = express();
const server = createServer(app);
const io = new Server(server, {
  cors: {
    origin: "*",
    methods: ["GET", "POST"],
  },
});
app.use(cors());
app.use(express.static(`${__dirname}/public`));

// Sockets setup
io.sockets.on("connection", (socket: Socket) => {
  new ClientSocket(socket);
});

app.use(express.static(`${__dirname}/public`));

// Api routes
setupRoutes(app);

// server bootstrap
const serverPort = 7554;
server.listen(serverPort, () => {
  console.log("server up and running at %s port", serverPort);
});
