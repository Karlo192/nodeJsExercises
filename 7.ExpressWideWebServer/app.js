const express = require("express");
const app = express();
app.use(express.json());

//ADDING FILE PATHS TO THE SERVER
app.use(express.static('public'));


//GETTING THE HTML PAGE FROM THE PUBLIC FOLDER
app.get("/", (req, res) => {
    res.sendFile(__dirname + "/public/welcome/welcome.html");
});

//GETTING ANOTHER HTML PAGE
app.get("/details", (req, res) => {
    res.sendFile(__dirname + "/public/details/details.html");
});

//SERVER-SIDE REDIRECTION
app.get("/safeport", (req, res) => {
    res.redirect("/details");
});

app.get("/crypto", (req, res) => {
    res.sendFile(__dirname + "/public/crypto/crypto.html");
});


//DEFINING FETCH FROM NODE-FETCH
const fetch = require('node-fetch');

//USING NODE-FETCH FOR A GOOGLE-LIKE PAGE ("https://www.google.com/")
//GETS THE BODY OF THE WEBPAGE AND RETURNS IT
app.get("/proxy", (req, res) => {
    fetch('https://www.google.com/')
    .then(response => response.text())
    .then(body => res.send(body))
});


const PORT = process.env.PORT || 8080

const server = app.listen(PORT, error => {
    if (error) {
        console.log(error);
    }
    console.log("Server running on port", server.address().port);
});