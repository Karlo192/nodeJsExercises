import express from 'express'
const app = express();

app.use(express.json());
app.use(express.static('public'));

// SETTING UP THE ROUTER
import router from './routes/dragonRoute.js'
app.use(router);

import session from "express-session";
app.use(session({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false }
}));

// SETTING UP SECOND ROUTER
import newRouter from './routes/newDragonRoute.mjs';
app.use(newRouter);

import { createServer } from 'http'
const server = createServer(app);
import { Server } from 'socket.io';
const io = new Server(server);

io.on('connection', (socket) => {
    console.log('User connected with id:', socket.id);

    // SOCKET.IO CODE HERE
    socket.on('newDragon', (data) => {
        io.emit('addNewDragon', { newDragon: data.newDragon });
    });

    socket.on('disconnect', (error) => {
        if (error) {
            console.log('An error occured - ', error);
        }
        console.log('User disconnected with id:', socket.id);
    });
});

const PORT = process.env.PORT || 5000;
server.listen(PORT, (error) => {
    if (error) {
        console.log('Error occured - ', error);
    }
    console.log('Server running on port:', server.address().port);
});