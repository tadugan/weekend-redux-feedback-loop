const express = require('express');
const router = express.Router();
const pool = require('../modules/pool');

// GET all reflections from the database

// POST a new reflection to the database
router.post('/', (req, res) => {
    console.log('This is the POST req.body', req.boy); // test
    const reflection = req.body;

    const queryText = `INSERT INTO "feedback" ("feeling", "understanding", "support", "comments")
    VALUES ($1, $2, $3, $4);
    `; 

    pool.query(queryText, [reflection.feeling, reflection.understanding, reflection.support, reflection.comments])
        .then(result => {
            console.log('Added the following to the database', reflection); // test
            res.sendStatus(201);
        })
        .catch(error => {
            console.log('Error adding new reflection. Error:', error);
            res.sendStatus(500);
        });
});


module.exports = router;