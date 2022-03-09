const express = require("express");
const app = express();

//SETTING UP THE BODY-PARSER
app.use(express.json());

//GETTING CATS DATA FROM JSON
const cats = require("./cats.json");

//QUERY STRINGS USING QUESTIONMARK
app.get("/querystring", (req, res) => {
    res.send({query: req.query});
});

//PASSING PATH VARIABLES AS REQUEST PARAMS WITH BACKSLASH
app.get("/pathvariable/:message/:title", (req, res) => {
    res.send({ 
        message: req.params.message, 
        title: req.params.title
    });
});

//POST REQUEST
app.post("/whatever", (req, res) => {
    //GET WHAT IS IN THE BODY AND SEND IT BACK
    res.send({body: req.body});
});

//CAT ROUTE
app.get("/cat", (req, res) => {
    res.send(cats);
});


app.listen(8083, (error) => {
    if (error) {
        console.log(error);
    } else {
        console.log("App running on port", 8083);
    }
});