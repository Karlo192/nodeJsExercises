const express = require('express');
const app = express();

const server = require('http').createServer(app);
const io = require('socket.io')(server);

// USING THE ESCAPE HTML LIBRARY FOR SECURITY REASONS - HTML INJECTION / XSS
const escapeHtml = require("html-escaper").escape;

// WORKING WITH THE SOCKETS
io.on('connection', (socket) => {

    console.log("Socket connected with ID:", socket.id);

    socket.on("colorSelected", (data) => {
        //socket.emit("changeColor", data); --> THIS SEND/EMITS ONLY FOR THE ONE SOCKET INSTANCE THAT INITIALLY CHANGES THE COLOR!
        //socket.broadcast.emit("changeColor", data); --> THIS LINE TRANSMITS TO ALL OTHER SOCKETS BUT DOESN'T UPDATE ITSELF
        io.emit("changeColor", { color: escapeHtml(data.color) }); // --> THIS ON THE OTHER HAND TRANSMITS TO ALL SOCKET INSTANCES
    });

    // DISCONNECTION
    socket.on("disconnect", () => {
        console.log(`Socket ${socket.id} disconnected...`);
    });
});

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/public/colors.html');
});


server.listen(8080, (error) => {
    if (error) {
        console.log(error);
    }
    console.log("Server running on port", 8080);
});