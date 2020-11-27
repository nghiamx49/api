const express = require('express');
const profileRouter = express.Router();
const sqlite3 = require('sqlite3');
const db = new sqlite3.Database('./db.sqlite' || process.env.DB)



profileRouter.get('/', (req, res, next) => {
    db.all(`SELECT * FROM profile`, (err, data) => {
        if(err) {
            next(err);
        }
        else if(data) {
            res.status(200).json({data: data})
        }
        else {
            res.sendStatus(400);
        }
    })
})



module.exports = profileRouter;