import express from 'express'
const router = express.Router();

const dragons = [
    {
        'name': 'Charizard',
        'angry': 'YES'
    }, 
    {
        'name': 'Red Dragon',
        'angry': 'Not so much'
    }
];

router.get("/api", (req,res) => {
    res.send({ dragons });
});

export default router