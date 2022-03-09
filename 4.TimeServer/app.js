const express = require("express");
const app = express();

//MADE A LIST THAT CONTAINS ALL DAYS OF THE WEEK, THEN FETCHING IT THROUGH THE INDEX
//DECLARING IT OUTSIDE THE SCOPE OF THE GET METHOD, SO IT LOADS THIS DATA ONLY ONCE THE SERVER STARTS
//AND NOT EVERY TIME THE GET METHOD IS CALLED AT THAT ENDPOINT
  const dayOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

//SAME AS THE DAYS LIST, BUT WITH MONTHS - FETCHING CORRECT MONTH THROUGH THE INDEX
//DECLARING IT OUTSIDE THE SCOPE OF THE GET METHOD, SO IT LOADS THIS DATA ONLY ONCE THE SERVER STARTS
//AND NOT EVERY TIME THE GET METHOD IS CALLED AT THAT ENDPOINT
const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

//HOMEPAGE FOR THE TIME API
app.get("/", (req, res) => {
    res.send("<h1>Welcome to my Time API !</h1>To access the current time, write \"/time\".<br>To access the current day of the month,"
            +" write \"/day\".<br>For current month, write \"/month\".<br><br>It works in realtime, check by refresing the time :)<br>"
            + "If you want to check the version of this API, go to \"/about\".");
});

app.get("/time", (req, res) => {
    res.send({currentTime: new Date().toLocaleTimeString()});
});

app.get("/day", (req, res) => {
    res.send({currentDateInMonth: new Date().getDate(), currentDayOfWeek: dayOfWeek[new Date().getDay()]});
});

app.get("/month", (req, res) => {
    res.send({currentMonth: months[new Date().getMonth()]});
});

app.get("/about", (req, res) => {
    res.send({version: "0.0.1"});
});

app.listen(8082);