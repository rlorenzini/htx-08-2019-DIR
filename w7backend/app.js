const express = require('express'),
  app = express(),
  port = process.env.PORT || 8080;

app.use(express.static("styles"));
//sets a static import to the styles folder for your .pug files to use

app.set("view engine", "pug"); //do not need to require("pug")

app.get('/', (req,res) => {
  console.log("hello")
  res.render("index", { title: "pugapp", message: "hello there!" });
});
//first argument "index" checks the VIEWS directory for an index template
//second argument can take an object which can pass data into the template

app.get("/about", (req,res) => {
  res.render("about")
})

app.get('/newPage', (req,res) => {
  res.render("newPage")
})

app.listen(port, () => {console.log(`listening on ${port}`)});
