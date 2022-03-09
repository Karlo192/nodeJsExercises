const express = require("express");
const app = express();
//const app = require("express")(); //ONE LINE

app.get("/", (req, res) => {
    res.send({});
});

app.get("/welcome", (req, res) => {
    res.send("<h1>Welcome my friends!!</h1>");
});

app.get("/me", (req, res) => {
    const me = {
        name: "David",
        surname: "Krtolica",
        age: 20,
        occupation: "Student",
        country: "Croatia",
        towns: ["Rijeka", "Copenhagen"]
    };
    res.send(me);
});

app.listen(8081);