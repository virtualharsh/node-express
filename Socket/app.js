const express = require('express');
const { createServer } = require('node:http');
const { join } = require('node:path');
const { Server } = require('socket.io');
const path = require('path')

const app = express();
app.use(express.static(path.resolve('./public')));
const server = createServer(app);
const io = new Server(server,{
    connectionStateRecovery: {}
});


io.on('connection', (socket) => {
    console.log('a user connected');
    io.emit("newuser","a new user is here")

    socket.on('disconnect', () => {
        console.log('user disconnected');
    });

    socket.on('message', (msg) => {
        console.log('message: ' + msg);
        io.emit('message', msg)
    });

});

app.get('/', (req, res) => {
    res.sendFile('index.html');
});

server.listen(3000, () => {
    console.log('server running at http://localhost:3000');
});