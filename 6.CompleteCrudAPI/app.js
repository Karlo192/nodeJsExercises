const express = require("express");
const app = express();
app.use(express.json());

//DEFINING BIKES AS DATA FROM BIKES.JSON
let bikes = require("./bikes.json");


//FIRST PAGE
app.get("/", (req, res) => {
    res.send("<h1>Welcome to my bike shop!</h1>To see our offer, write \"/bikes\" in the URL.");
});


//GET REQUEST TO GET ALL BIKES w/ OPTIONAL BRAND QUERY PARAM
app.get("/bikes", (req, res) => {
    let searchedBikes = [];
    bikes.map(bike => {
        if (req.query.name === bike.name || req.query.name === bike.name.toLowerCase()) {
            searchedBikes.push(bike);
        }
    });
    if (searchedBikes.length === 0) {
        res.send({ bikes });
    } else {
        res.send({ searchedBikes });
    }
});


//GET REQUEST WITH OPTION TO PASS ID PATH VARIABLE
app.get("/bikes/:id", (req,res) => {
    /* bikes.map(bike => {
        if (parseInt(req.params.id) === bike.id) {
            res.send({ bike });
        }
    }); */
    const bikeId = parseInt(req.params.id);
    const bike = bikes.find(bike => bikeId === bike.id);
    res.send({ bike });
});


//POST REQUEST FOR CREATING A NEW BIKE OBJECT
// w/ SELF-ASSINING ID
app.post("/bikes", (req, res) => {
    let newBike = req.body;
    if (bikes.length === 0) {
        newBike.id = 1;
    } else {
        newBike.id = (bikes[bikes.length - 1].id) + 1;
    };
    res.send({ newBike });
    bikes.push(newBike);
});


//PUT FOR UPDATING A BIKE BY ID
app.put("/bikes/:id", (req, res) => {
    bikes.map(bike => {
        if (parseInt(req.params.id) === bike.id) {
            let updatedBike = req.body;
            updatedBike.id = parseInt(req.params.id);
            bikes[bikes.indexOf(bike)] = updatedBike;
            res.send({ updatedBike });
        }
    });
});


//DELETE ALL BIKES
app.delete("/bikes", (req, res) => {
    while (bikes.length) {
        bikes.pop();
    }
    res.send({ message: "You have successfully deleted all bikes!" });
});


//DELETE BIKE BY ID
app.delete("/bikes/:id", (req, res) => {
    bikes.map(bike => {
        if (parseInt(req.params.id) === bike.id) {
            let removed = bikes.splice(bikes.indexOf(bike), 1);
            res.send({ removedBike: removed });
        }
    });
});



app.listen(8080, (error) => {
    if (error) {
        console.log(error);
    } else {
        console.log("App running on port", 8080);
    }
});