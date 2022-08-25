// var requestUrl = 'http://www.omdbapi.com/?t=cars&apikey=ab9eb185';

var movie = prompt("enter a movie name!");

var omdbapi = "http://www.omdbapi.com/?apikey=ab9eb185&s=";

fetch(omdbapi + movie)
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    console.log(data);
  });