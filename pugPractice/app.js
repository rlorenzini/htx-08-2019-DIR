const express = require('express'),
  app = express(),
  bodyParser = require('body-parser'),
  PORT = process.env.PORT || 8080,
  session = require('express-session'),
  accountRouter = require('./routes/account')

app.set('view engine', 'pug');

app.use(
  session({
    secret: "I love potatoes more than frogs!",
    resave: false,
    saveUninitialized: true
  })
);

app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: false }));

const movies = [
  { title: "Lord of the Rings", slug: "lotr" },
  { title: "Star Wars", slug: "starwars" },
  { title: "Pulp Fiction", slug: "pulpfiction" },
  { title: "The Ring", slug: "thering" },
  { title: "Coco", slug: "coco" },
  { title: "Up", slug: "up" },
  { title: "Finding Nemo", slug: "findingnemo" }
];

//=============LOGIN AND USER EXPERIENCE=============

app.use('/account', accountRouter);

app.get('account', (req,res) => {
  console.log('hello there')
  console.log(req.session)
  res.render('account', {name: req.session.name})
});

//============MOVIES AND MOVIE DATA==================
app.get('/movies', (req,res) => {
  res.render('movies', { movies: movies })
});

app.get("/movies/:movie", function(req, res) {
  let filteredMovies = movies.filter(movie => {
    return movie.slug === req.params.movie;
  });
  if (filteredMovies.length < 1) {
    res.send("Movie not found");
  }
  res.render("movie", { movie: filteredMovies[0] });
});

//=============GET CONTENT FOR HEADER LINKS==========

app.get('/', (req,res) => {
  res.render('index')
});

app.get('/about/us', (req,res) => {
  res.render('aboutUs')
});

app.get('/contact', (req,res) => {
  res.render('contact')
});

//=============END AND LISTEN=====================
app.listen(PORT, () => {console.log(`Port ${PORT}`)});
