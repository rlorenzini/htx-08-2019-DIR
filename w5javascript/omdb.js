function fetchData() {
  let url = "http://www.omdbapi.com/?t=Spider-man&apikey=a90050c8"
  fetch(url)
    .then(response => response.json())
    .then(json => {
      JSON.stringify(json)
      console.log(json)
    });
};

const fetchButton = document.getElementById("fetchButton");
fetchButton.addEventListener("click", fetchData);

function fetchAndDisplayData() {
  let url = "http://www.omdbapi.com/?t=Spider-man&apikey=a90050c8"
  fetch(url)
    .then(response => response.json())
    .then(movieItems => {
      let movieTitle = movieItems.Title,
        movieYear = movieItems.Year,
        movieRuntime = movieItems.Runtime

      if(movieTitle != null){
        let movieData = `
        <div class="row">
        <p>${movieTitle}</p>
        <p>${movieYear}</p>
        <p>${movieRuntime}</p>
        </div>
        `
        document.getElementById("insertMovieDataHere").innerHTML = movieData
      };
    });
};

const addMovieToPage = document.getElementById("addMovieToPage");
addMovieToPage.addEventListener("click", fetchAndDisplayData);


//everything below this is just to show concepts at the time of the question
array = [1,2,3,4,5,6,7,8,9]

function randomStuff() {
console.log(Math.floor(Math.random() * array.length))
}
randomStuff()


array2 = []

function pushToArray() {
  while(array2.length < 20) {
    array2.push("frogs")
  }
}

pushToArray()
console.log(array2)

//absolutely no clue how this shuffle functions works or why

function shuffle(a) {
   var j, x, i;
   for (i = array.length - 1; i > 0; i--) {
       j = Math.floor(Math.random() * (i + 1));
       x = a[i];
       a[i] = a[j];
       a[j] = x;
   }
   return a;
}

console.log(shuffle(array))
