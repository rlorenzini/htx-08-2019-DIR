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

app.post('/Signup', (req,res) => {
  console.log('YOU DID IT')
  console.log(req.body)

  //move req.body to DB
});


app.listen(PORT, () => {
  console.log(`Server running on localhost: ${PORT}.`);
});
