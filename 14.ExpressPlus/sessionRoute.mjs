import express from 'express';
const sessionRouter = express.Router();

sessionRouter.get("/setSession", (req, res) => {
    req.session.fact = "Cats are cute!";
    res.send({ message: "Session set!" });
});

sessionRouter.get("/getSession", (req, res) => {
    console.log("Fact:", req.session.fact);
    res.send({ message: req.session.fact });
});

export default sessionRouter;