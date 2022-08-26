var movieSearch = document.querySelector("#movieSearch");
var searchBtn = document.querySelector("#searchBtn");

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
    console.log(data);
  });
}

searchBtn.addEventListener("click", onSubmit);



