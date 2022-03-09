const express = require('express');
const app = express();
app.use(express.json());

app.get("/jQuery", (req, res) => {
    res.sendFile(__dirname + '/jQuery_exercises.html');
});

const PORT = process.env.PORT || 8080;

const server = app.listen(PORT, error => {
    if(error) {
        console.log(error);
    }
    console.log('Server running on port', server.address().port);
});