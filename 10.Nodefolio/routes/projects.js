const router = require("express").Router();

// PROJECTS SCHEMA
/* {
    title: String,
    description: String,
    gitURL: String,
    images: String[],
    technologiesInvolved: String[]
} */

const projects = [
    {
        title: "Nodefolio",
        description: "Created a personal portfolio using Node.js",
        gitURL: "https://github.com/DavidKrtolica/NodeJsA/tree/main/10.Nodefolio",
        image: "./global/nodejslogo.png",
        technologiesInvolved: ["Node.js", "HTML", "CSS"]
    },
    {
        title: "Course documentation",
        description: "Created a course documentation website using Node.js, Express, Html and CSS",
        gitURL: "https://github.com/DavidKrtolica/NodeJsA/tree/main/MandatoryProject1",
        image: "./global/nodejslogo.png",
        technologiesInvolved: ["Node.js", "HTML", "CSS", "Express"]
    },
    {
        title: "Nordic Motorhome Rental",
        description: "Exam project for 1st year at KEA - a simple web app for renting out motorhomes",
        gitURL: "https://github.com/nirenrawal/NordicMotorhomeProject",
        image: "./global/springbootlogo.png",
        technologiesInvolved: ["Java", "MySQL", "HTML", "CSS"]
    },
    {
        title: "DnD Cykler API",
        description: "Shared project - a simple API with a distributed database which was to be used for a bike webshop",
        gitURL: "https://dnd-cykler.herokuapp.com/bikes",
        image: "./global/restapi.png",
        technologiesInvolved: ["Java", "MySQL", "HerokuPlatform", "RestAPIs"]
    },
    {
        title: "Pancake calculator app",
        description: "WiP - creating a recipe app which calculates the amount of ingredients for specific pancake recipes, "
                    +"depending on the amount of people",
        gitURL: "To be announced...",
        image: "./global/reactnativelogo.jpg",
        technologiesInvolved: ["React Native", "Expo-CLI"]
    }
];

router.get("/api/projects", (req, res) => {
    res.send({ projects });
});

module.exports = {
    router
};