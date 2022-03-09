const express = require('express');
const app = express();

const server = require('http').createServer(app);
const io = require('socket.io')(server);

io.on('connection', (socket) => {
    console.log("Socket connected with ID:", socket.id);
    socket.on("messageSent", (data) => {
        io.emit("recieveMessage", data)
    });
});

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/public/index.html");
});

server.listen(8080, (error) => {
    if (error) {
        console.log(error);
    }
    console.log("Server running on Port:", 8080)
});