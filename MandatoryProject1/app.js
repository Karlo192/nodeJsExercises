const express = require("express");
const app = express();
app.use(express.json());

//ADDING CSS TO THE SERVER
app.use(express.static(__dirname + "/stylesheet"));

//ADDING THE PICTURES FOLDER
app.use(express.static(__dirname + "/pictures"));

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/public/index.html");
});

app.get("/courseStart", (req, res) => {
    res.sendFile(__dirname + "/public/courseStart.html");
});

app.get("/crudRestApi", (req, res) => {
    res.sendFile(__dirname + "/public/crudRestApi.html");
});

app.get("/expressWideWeb", (req, res) => {
    res.sendFile(__dirname + "/public/expressWideWeb.html");
});

app.get("/aboutme", (req, res) => {
    res.sendFile(__dirname + "/public/aboutme.html");
});

app.get("/express", (req, res) => {
    res.sendFile(__dirname + "/public/express.html");
});

app.get("/nodemon", (req, res) => {
    res.sendFile(__dirname + "/public/nodemon.html");
});

app.get("/crossEnv", (req, res) => {
    res.sendFile(__dirname + "/public/crossEnv.html");
});

const PORT = process.env.PORT || 8080;
app.listen(PORT, (error) => {
    if(error) {
        console.log(error);
    } else {
        console.log("Server running on port", Number(PORT));
    }
});