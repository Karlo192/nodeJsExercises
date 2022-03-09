const express = require('express');
const app = express();

app.use(express.json());
app.use(express.static('public'));

const route = require('./routes/route');
app.use(route.router);

// NOT EVEN NEEDED BECAUSE OF LINE 5
/* app.get('/', (req, res) => {
    res.sendFile(__dirname + '/public/index.html');
}); */

const PORT = process.env.PORT || 5000;
app.listen(PORT, (error) => {
    if (error) {
        console.log('Error has occured!');
    };
    console.log('Server running on port', PORT);
});