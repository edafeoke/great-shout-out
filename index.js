const { Server } = require("socket.io");

const io = new Server({
  cors: {
    origin: "*",
  },
});
console.log("Server is on...");
io.on("connection", (socket) => {
  console.log(socket.id);

  //   socket.on("private message", (anotherSocketId, msg) => {
  //     socket.to(anotherSocketId).emit("private message", socket.id, msg);
  //   });

  socket.on("msg", (msg) => {
    socket.broadcast.emit("msg", msg);
  });
});

// io.emit("private message", "Hello world")
io.listen(3000);
