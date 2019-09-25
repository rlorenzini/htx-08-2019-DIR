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
      if else {
        console.log("SOMEthing weNT WRonG!")
      }
    });
};

const addMovieToPage = document.getElementById("addMovieToPage");
addMovieToPage.addEventListener("click", fetchAndDisplayData);
