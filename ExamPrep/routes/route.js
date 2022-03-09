const router = require('express').Router();

const strings = ['David', 'Anders'];

router.get('/api', (req, res) => {
    res.send({ strings });
});

module.exports = {
    router
};