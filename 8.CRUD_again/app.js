const express = require("express");
const app = express();
app.use(express.json());

//DEFINING DATA - PLANT ARRAY WITH PLANTS
let plants = [
    {
        id: 1,
        name: "Rose"
    }, 
    {
        id: 2,
        name: "Sunflower"
    }
];

//DEFINING AUTO-INCREMENT ID -- FROM 3 UP
let autoId = 3

//GET METHOD FOR RETRIEVEING ALL PLANTS
app.get("/plants", (req, res) => {
    const plantName = req.query.name;   
    if (plantName === undefined) {
        res.send({ data: plants });
    } else {
        const foundPlants = plants.find(plant => plant.name === plantName || plant.name.toLowerCase() === plantName);
        res.send({ data: foundPlants });
    }
});

//GET METHOD FOR RETRIEVEING BY ID
app.get("/plants/:id", (req, res) => {
    const plantId = Number(req.params.id);
    const foundPlant = plants.find(plant => plant.id === plantId);
    res.send({ data: foundPlant });
});

//POST METHOD FOR CREATING A NEW RESOURCE
app.post("/plants", (req, res) => {
    const newPlant = req.body;
    newPlant.id = autoId++;
    plants.push(newPlant);
    res.send({ data: newPlant });
});

//PATCH METHOD FOR UPDATING A RESOURCE
app.patch("/plants/:id", (req, res) => {
    let plantUpdated = false;
    const plantId = Number(req.params.id);
    plants = plants.map(plant => {
        if (plant.id === plantId) {
            plantUpdated = true;
            return { ...plant, ...req.body, id: plant.id }
        }
        return plant;
    });
    res.send({ updated: plantUpdated, at: plantId });
});

//DELETE METHOD AT SPECIFIC ID
app.delete("/plants/:id", (req, res) => {
    const plantId = Number(req.params.id);
    plants = plants.filter(plant => plant.id !== plantId);
    res.send({ data: "deleted", at: plantId });
});


//PORT ENVIRONMENT VARIABLE FROM PACKAGE.JSON SCRIPT "start-dev"
const PORT = process.env.PORT || 8080;
app.listen(PORT, (error) => {
    if(error) {
        console.log(error);
    } else {
        console.log("Server running on port", Number(PORT));
    }
});