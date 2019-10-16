const express = require('express'),
  app = express(),
  bodyParser = require('body-parser'),
  cors = require('cors'),
  path = require('path'),
  Sequelize = require('sequelize'),
  Op = Sequelize.Op,
  models = require('./models'),
  jwt = require('jsonwebtoken'),
  bcrypt = require('bcrypt'),
  SALT_ROUNDS = 10,
  PORT = process.env.PORT || 8080;

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

//====================HANDLING SIGNUP==========================================
// create login and bcrypt compare passwords
// bcrypt.compare to compare passwords
app.post('/signup', (req,res) => {

  let username = req.body.username,
    password = req.body.password,
    email = req.body.email

  models.User.findOne({
    where: {
      username: username
    }
  }).then((user) => {
    if (user) {
      res.status(500).json({ message: "Username already exists!", status: 500 })
    } else {
      bcrypt.hash(password, SALT_ROUNDS, (error, hash) => {
        if (error == null) {
          let user = models.User.build({
            username: username,
            password: hash,
            email: email
          })
          user.save()
        } //end of if
      }) //end of bcrypt
    } //end of else
  }) //end of promise
});
//====================HANDLING LOGIN===========================================
app.post('/login', (req,res) => {
  let username = req.body.username,
    password = req.body.password
  models.User.findOne({
    where: {
      username: username
    }
  }).then((user) => {
    if (user) {
      bcrypt.compare(password, user.password, (error, result) => {
        if (result) {
          // add json web token here
          console.log("login successful")
          res.status(200).json({ message: "success", status: 200 })
        } // else if json web token fails status 500
      }) // end of bcrypt compare
    } else if (user === null) {
      let message = "error: login failed"
      res.status(500).json({ message: message, status: 500 })
    }
  }) // end of promise
});

app.listen(PORT, () => {
  console.log(`Server running on localhost: ${PORT}.`);
});
