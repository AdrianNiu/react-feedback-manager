const express = require('express');
const router = express.Router();
const pool = require('../modules/pool');



router.get('/', (req, res) => {
    console.log('GET /feedback');
    pool.query('SELECT * from "feedback";').then((result) => {
        res.send(result.rows);
    }).catch((error) => {
        console.log('Error GET feedback', error)
        res.sendStatus(500);
    });
})


router.post('/', (req, res) => {
    const newFeedback = req.body;
    const sqlText = `INSERT INTO feedback ("feeling", "understanding", "support",  "comments") VALUES 
  ($1, $2, $3, $4)`;
    pool.query(sqlText, [newFeedback.feeling, newFeedback.understanding, newFeedback.support, newFeedback.comments])
        .then((result) => {
            console.log(`Added song to the database`, newFeedback);
            res.sendStatus(201);
        })
        .catch((error) => {
            console.log(`Error making database query ${sqlText}`, error);
            res.sendStatus(500); // Good server always responds
        })
})

// router.delete('/:id', (req, res) => {
//     let reqId = req.params.id;
//     console.log('Delete request for id', reqId);
//     let sqlText = 'DELETE FROM "feedback" WHERE id=$1;';
//     pool.query(sqlText, [reqId])
//         .then((result) => {
//             console.log('Feedback deleted');
//             res.sendStatus(200);
//         })
//         .catch((error) => {
//             console.log(`Error making database query ${sqlText}`, error);
//             res.sendStatus(500); 
//         })
// })

router.delete('/:id', (req, res) => {
    pool.query('DELETE FROM "feedback" WHERE id=$1', [req.params.id])
      .then((result) => {
        res.sendStatus(200);
    }).catch((error) => {
        console.log('Error DELETE feedback', error);
        res.sendStatus(500);
    })
});


module.exports = router;