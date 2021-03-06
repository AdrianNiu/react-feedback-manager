const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const PORT = process.env.PORT || 5000;

/** ---------- MIDDLEWARE ---------- **/
app.use(bodyParser.json()); // needed for angular requests
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static('build'));

/** ---------- EXPRESS ROUTES ---------- **/
const fbRouter = require('./routes/feedback.router.js');
app.use('/feedback', fbRouter);

/** ---------- START SERVER ---------- **/
// app.listen(PORT, () => {
//     console.log('Listening on port: ', PORT);
// });

const port = process.env.PORT || 5000;
app.listen(port, () => {
    console.log('server up on:', port);
})   

//heroku addons:create heroku-postgresql:hobby-dev
//heroku pg:push prime_feedback DATABASE_URL