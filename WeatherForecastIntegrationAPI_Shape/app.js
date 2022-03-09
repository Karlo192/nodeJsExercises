import express from "express";
import fetch from "node-fetch";
import rateLimit from "express-rate-limit"
import cities from './citiesTest.js';



//CREATE AN EXPRESS SERVER, SETTING UP BODY-PARSER 
const app = express();
app.use(express.json());

//RATE LIMIT IMPLEMENTATION FOR AMOUNT OF USER REQUESTS
const basicLimiter = rateLimit({
    windowMs: 24 * 60 * 60 * 1000, // 24 HOURS WINDOW
    max: 10000 // 10.000 REQS PER USER
});
app.use(basicLimiter); // HITS ALL ROUTES

//GENERAL FUNCTION FOR SETTING UNITS USING "units" QUERY 
function setUnits(unitsQuery) {
    let units = unitsQuery;
    let unitSet = '';
    if (units == 'standard' || units == 'imperial' || units == 'fahrenheit') {
        unitSet = 'imperial' 
    } else {
        unitSet = 'metric'; 
    };
    return unitSet;
};


//GET REQUEST FOR RETRIEVEING TEMPERATURES FOR A SPECIFIC LOCATION BY LOCATION_ID
app.get('/weather/locations/:id', (req, res) => {

    //FINDING THE CORRECT CITY BASED ON ID PARAM
    const locID = parseInt(req.params.id);
    const cityObj = cities.find(city => locID == city.id);
    const cityName = cityObj.name;

    //SETTING THE CORRECT TEMPERATURE UNIT - DEAFULT IS METRIC/CELSIUS
    let unitSet = setUnits(req.query.units);

    //FETCHING THE OPENWEATHER API AND RETRIEVEING DATA - PASSING SOME VARIABLES FOR CITY AND TEMPERATURE
    fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${cityObj.coord.lat}&lon=${cityObj.coord.lon}&units=${unitSet}&exclude=current,minutely,hourly,alerts&appid=585a9944387df8ec6ee7621d0440d52b`)
    .then(res => res.json())
    .then(json => {
        let nextFiveDayTemps = [];
        for (let i = 0; i < 5; i++) {
            let dayTemp = json.daily[i].temp.day;
            nextFiveDayTemps.push(dayTemp);
        }
        res.send({ cityName, nextFiveDayTemps });
    });
});


//GET REQUEST FOR RETRIEVEING A LIST OF USER'S FAVORITE LOCATIONS WHERE THE TEMP OF THE NEXT DAY IS ABOVE THE QUERY SET TEMP
app.get('/weather/summary', (req, res) => {

    //SETTING THE CORRECT TEMPERATURE UNIT - DEAFULT IS METRIC/CELSIUS
    let unitSet = setUnits(req.query.units);

    //WILL BE INTEGER
    let queryTemp = parseInt(req.query.temperature);

    //WILL BE ARRAY LIST OF INTS
    let locations = req.query.locations;
    let locArray = locations.split(',');
    let weatherSummaries = [];

    const setLocations = new Promise(function(resolve, reject) {
        locArray.forEach(location => {
            const locID = parseInt(location);
            const cityObj = cities.find(city => locID == city.id);
            const cityName = cityObj.name;
    
            fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${cityObj.coord.lat}&lon=${cityObj.coord.lon}&units=${unitSet}&exclude=current,minutely,hourly,alerts&appid=585a9944387df8ec6ee7621d0440d52b`)
            .then(res => res.json())
            .then(json => {
                let dayTemp = parseFloat(json.daily[1].temp.day);
                if (dayTemp > queryTemp) {
                    let weatherSummary = json.daily[1];
                    let perLoc = { cityName, weatherSummary };
                    weatherSummaries.push(perLoc);
                } 
            });
        });
        setTimeout(resolve, 1000);
    });

    Promise.all([setLocations]).then(() => {
        res.send({ weatherSummaries })
    }); 
});


//DEFINING PORT, CREATING A SERVER AND ASSIGNING IT TO THE DECLARED PORT
const PORT =  9091;
const server = app.listen(PORT, (error) => {
    if (error) {
        console.log(error);
    }
    console.log("Server running on port:", server.address().port);
});