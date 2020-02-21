// Currying Functions

// examples include tips, messages, and api calls 

// Currying Functions is when you create a function that returns another function.
// At first, this may seem unnecessary. Currying is best for when multiple functions
// have one or multiple input values that are the exact same.

// For instance, a register's tip calculations. The set value will always be the tip,
// whether it is 10%, 15%, or nth%.

tip = (tipValue) => {
  return (price) => {
    console.log(price * tipValue)
  };
};

// We create a tip function with one parameter called tipValue. We return a function
// with one parameter called price. The function as a whole multiplies the tip by the price.
// Normally, you would create a function and just take in two paramaters.

otherTipFunction = (price, tip) => {
  console.log(price * tip)
};

otherTip15 = (price) => {
  console.log(price * 1.15)
}

// The issue with the otherTipFunction is we have to create multiple of them to
// calculate the price or have the tip always be calculated. By setting fixed values,
// we can improve performance.

let tip15 = tip(1.15);
let tip20 = tip(1.20);

// With currying, we are able to create multiple functions quicker and with less lines of code.

tip15(100) //return 114.999999999999999999 (64 bit floats do weird things)
tip20(100) //returns 120

// Now we can create and use new functions without rewriting an old function and
// changing a single value. Tips are a simple example, but most if not all math related
// functionality can be simplified with currying.

// Volume is another example. If you work for a box manufacturer and need to create
// a more efficient software, currying will be a good place to start. If all of a
// certain kind of box have the same width and length but different heights, why
// create new functions when you can curry the functions?



// We can also use currying for messages.

curry = (greeting) => {
  return (name) => {
    console.log(greeting + ", " + name)
  };
};

let welcome = curry("Welcome");
welcome("Richard"); // Welcome, Richard

// Currying is not an ES6 feature and can be done with ES5 JS.

var greetCurried = function(greeting) {
  return function(name) {
    console.log(greeting + ", " + name);
  };
};

var greetHello = greetCurried("Hello");
greetHello("Heidi"); //"Hello, Heidi"



// But wait! There's more! API calls can be curried as well.

apiCall = (searchTerm) => {
  return (info) => {
    let url = `http://www.omdbapi.com/?apikey=a90050c8&s=${searchTerm}`
    console.log(url)
    fetch(url).then(result => result.json()).then(
      json => json.Search.map((movie) => {
        if (info === "title") {
          console.log(movie.Title)
        } else if (info === "year") {
          console.log(movie.Year)
        } else if (info === "all") {
          console.log(movie)
        }
      })
    )
  };
};

// I have a curried function which does an API call based on a term and returns
// the results. Then, the result is mapped and we are given an object full of information
// about each movie. We currying, we can create functions and put in a single term
// to return just the items we want.

let batman = apiCall("batman");
let spiderman = apiCall("spiderman");
let avengers = apiCall("avengers");
batman("title"); // returns movie Titles
spiderman("year"); // returns movie release Years
avengers("all"); // returns all information

// Doing this, we can change our search term in the api call and change what we do
// with the results. Less code; quicker and easier.
