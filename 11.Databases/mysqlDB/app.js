const db = require('./connection').connection;

console.log(process.env.DB_DATABASE);

// INSERTING INTO THE DB actors TABLE
/* db.query(`INSERT INTO ACTORS (name, height) VALUES (?, ?);`, ["Jason Statham", 172], (error, result, fields) => {
    console.log(result);
}); */

// READING FROM THE DB actors TABLE
db.query(`SELECT * FROM actors`, (error, results, fields) => {
    console.log(results);
    const actors = [];
    results.forEach(result => {
        actors.push(result.name);
    });
    console.log(actors);

});