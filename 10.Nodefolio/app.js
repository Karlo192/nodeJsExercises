const express = require('express');
const app = express();

app.use(express.json());
app.use(express.static('public'));

// ALLOWING TO PASS FORM DATA (FROM CONTACT ME PAGE)
app.use(express.urlencoded({ extended: true }));

// GETTING THE PROJECTS API ROUTE
const projectsRoute = require("./routes/projects");
app.use(projectsRoute.router);

// GETTING THE CONTACT API ROUTE
const contactRoute = require("./routes/contact");
app.use(contactRoute.router);

// APPLYING THE BOOTSTRAP
const path = require('path');
app.use('/css', express.static(path.join(__dirname, 'node_modules/bootstrap/dist/css')));
app.use('/js', express.static(path.join(__dirname, 'node_modules/bootstrap/dist/js')));
app.use('/js', express.static(path.join(__dirname, 'node_modules/jquery/dist')));

//SSR - SERVER SIDE RENDERING
// IMPORTING FS - FILE SYSTEM
const fs = require('fs');

// NAVBAR AND FOOTER COMPONENTS
// NAVBAR HAS STYLING FOR MAIN CONTENT AS WELL
const nav = fs.readFileSync(__dirname + '/public/nav/nav.html', 'utf-8');
const footer = fs.readFileSync(__dirname + '/public/footer/footer.html', 'utf-8');


// ALL PAGE COMPONENTS
const frontpage = fs.readFileSync(__dirname + '/public/frontpage/frontpage.html', 'utf-8');
app.get("/", (req, res) => {
    res.send(nav + frontpage + footer);
});

const contactpage = fs.readFileSync(__dirname + '/public/contactpage/contactpage.html', 'utf-8');
app.get("/contact", (req, res) => {
    res.send(nav + contactpage + footer);
});

const projectspage = fs.readFileSync(__dirname + '/public/projectspage/projectspage.html', 'utf-8');
app.get("/projects", (req, res) => {
    res.send(nav + projectspage + footer);
});

const resumepage = fs.readFileSync(__dirname + '/public/resumepage/resumepage.html', 'utf-8');
app.get("/resume", (req, res) => {
    res.send(nav + resumepage + footer);
});

const schedulepage = fs.readFileSync(__dirname + '/public/schedulepage/schedulepage.html', 'utf-8');
app.get("/schedule", (req, res) => {
    res.send(nav + schedulepage + footer);
});


const PORT = process.env.PORT || 8080;
const server = app.listen(PORT, error => {
    if (error) {
        console.log(error);
    }
    console.log('Server running on', server.address().port);
});