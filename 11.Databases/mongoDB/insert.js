const MongoClient = require('mongodb').MongoClient;
const url = 'mongodb://localhost:27017';
const dbName = 'movies';

MongoClient.connect(url, { useUnifiedTopology: true }, (error, client) => {
    if (error) {
        throw error;
    }

    const db = client.db(dbName);
    const movies = db.collection('movies');

    movies.insertOne({ name: 'Tomb Rider' }, (error, result) => {
        if (error) {
            throw error;
        }
        client.close();
    });
});