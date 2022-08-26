var movieSearch = document.querySelector("#movieSearch");
var searchBtn = document.querySelector("#searchBtn");
var searchResults = document.querySelector("#searchResults");

var omdbapi = "http://www.omdbapi.com/?apikey=ab9eb185&s=";


function onSubmit(event) {
  event.preventDefault();

  var userSearch = movieSearch.value.trim();
  if (userSearch === "") {
    return;
  }

  fetch(omdbapi + userSearch)
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    renderSearch(data);
  });

  movieSearch.value = "";
}

function renderSearch(results) {
  searchResults.innerHTML = "";
  var movies = results.Search;
  
  for (i = 0; i < movies.length; i++) {
    var li = document.createElement("li");
    li.textContent = movies[i].Title;
    li.setAttribute("data-index", i);
    searchResults.appendChild(li);
  }


}

searchBtn.addEventListener("click", onSubmit);
