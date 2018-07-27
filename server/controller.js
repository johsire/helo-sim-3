
const axiso = require('axios');

module.exports = {
  register_user: (req, res, next) => {
    const db = req.app.get("db");
    let { username, password } = req.body;
    console.log('you are in!', req.body, username, password);

    db.create_user([username, password]).then(response => {
      res.status(200).send(response);
      console.log(response);
    })
    .catch(err => {
      console.log(err);
      res.status(500).send(err);
    });
},

  login_user: (req, res, next) => {
    const db = req.app.get("db");
    let { username, password } = req.body;

    db.login_user([username, password])
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
