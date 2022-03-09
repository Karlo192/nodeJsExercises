import express from 'express'
const newRouter = express.Router();

newRouter.get('/importAPIsetSession', (req, res) => {
    req.session.fact = "I will pass!";
    res.send({ message: 'Session is set!'});
});

newRouter.get('/importAPIgetSession', (req, res) => {
    res.send({ fact: req.session.fact});
});

export default newRouter;