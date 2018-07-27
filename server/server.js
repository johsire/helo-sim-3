require('dotenv').config();
const massive = require('massive');
const express = require('express');
const bodyParser = require('body-parser');
session = require('express-session');

// app.use(express.static(`${__dirname}/../build`));

const controller = require ('./controller');

const { REACT_APP_DOMAIN, REACT_APP_CLIENT_ID, CLIENT_SECRET, SESSION_SECRET, CONNECTION_STRING } = process.env;

const app = express();

massive(process.env.CONNECTION_STRING)
  .then(db => {
   app.set('db', db)})
  .catch(err => console.log(err));

app.use(session ({
    secret: SESSION_SECRET,
    resave: false,
    saveUninitialized: false
  }))
  

app.use(bodyParser.json());


// users endpoints;
app.post('/api/register-user', controller.register_user);
app.post('/api/login-user', controller.login_user);



app.get('/api/user-data', (req, res) => {
  if (req.session.user) {
    res.status(200).send(req.session.user);
  } else {
    res.status(401).send('Nice try sucka!');
  }
});


const SERVER_PORT = process.env.SERVER_PORT || 5000;
app.listen(SERVER_PORT, () => {
  console.log(`Mayweather makin it rain on port: ${SERVER_PORT}!`);
});
