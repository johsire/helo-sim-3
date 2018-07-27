
const axiso = require('axios');

module.exports = {
  registerUser: (req, res, next) => {
    const db = req.app.get("db");
    let { username, password } = req.body;
    console.log('you are in!', req.body, username, password);

    db.createUser([username, password]).then(response => {
      res.status(200).send(response);
      console.log(response);
    })
    .catch(err => {
      console.log(err);
      res.status(500).send(err);
    });
},

   loginUser: (req, res, next) => {
    const db = req.app.get("db");
    let { username, password } = req.body;

    db.login([username, password])
    .then(response => {
      res.status(200).send(response);
      console.log('response coming from login', response);
    })
    .catch(err => {
      console.log(err);
      res.status(500).send(err);
    });
  }
};
