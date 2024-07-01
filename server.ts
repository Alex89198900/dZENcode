import { createServer } from "node:http";
import next from "next";
import { Server } from "socket.io";
import { connectDB } from "./db/connectdb";

const dev = process.env.NODE_ENV !== "production";
const hostname = "localhost";
const port = 3000;
let online = 0;
let server = false
const app = next({ dev, hostname, port });
const handler = app.getRequestHandler();

connectDB();

app.prepare().then(() => {
  const httpServer = createServer(handler);
  const io = new Server(httpServer);
  io.on("connection", (socket) => {
    online++;
    io.emit("chat message", String(online));
    socket.on("disconnect", () => {
      online--;
      io.emit("chat message", String(online));
    });
    console.log(online)
  });

  httpServer
    .once("error", (err) => {
      console.error(err);
      process.exit(1);
    })
    .listen(port,"0.0.0.0", () => {
      console.log(`> Ready on http://${hostname}:${port}`);
    });
});





