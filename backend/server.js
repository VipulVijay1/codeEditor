import express from "express";
import { createServer } from "http";
import { Server } from "socket.io";
import { YSocketIO } from "y-socket.io/dist/server";
// require("dotenv").config();
import "dotenv/config";

const app = express();
const httpServer = createServer(app);

const io = new Server(httpServer, {
  cors: {
    origin: "*",
    methods: ["GET", "POST"],
  },
});

const ySocketIO = new YSocketIO(io);
ySocketIO.initialize();

app.get("/", (req, res) => {
  res.status(200).json({
    message: "Health Check Route",
    success: true,
  });
});
app.get("/health", (req, res) => {
  res.status(200).json({
    message: "ok",
    success: true,
  });
});
const PORT = process.env.PORT || 3000;
httpServer.listen(PORT, () => {
  console.log(`Serevr is running on port: ${PORT}`);
});
