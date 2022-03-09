const express = require("express");
const app = express();

//CREATE DATA --> BIKES LIST WITH 2 BIKES
//EASY FIX FOR FIND BY ID --> POSITION IN ARRAY == ID
const bikes = [
    {
        id: 0,
        name: "Trek"
    },
    {
        id: 1,
        name: "Cannondale"
    },
    {
        id: 2,
        name: "Cube"
    },
    {
        id: 3,
        name: "Specialized"
    }
];

app.get(["/bikes", "/"], (req, res) => {
    res.send(bikes);
});

app.get("/bikes/id", (req, res) => {
    //ID SEARCH HARDCODED
    const idSearch = 2;
    res.send(bikes[idSearch]);
});

//DEFINE PORT
app.listen(8080);