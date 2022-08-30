var movieSearch = $("#movieSearch");
var searchBtn = $("#searchBtn");
var searchResults = $("#searchResults");
var moviePlaylistEl = $("#movieplist");

var omdbapi = "http://www.omdbapi.com/?apikey=ab9eb185&s=";
var movies;
var playlist = [];



function renderSearch(results) {
  searchResults.html("");
  movies = results.Search;
  
  for (i = 0; i < movies.length; i++) {
    var li = $("<li>");
    li.text(movies[i].Title);
    li.attr("data-index", i);
    searchResults.append(li);

    li.on("click", saveMovie);
  }

}

function saveMovie(event) {
  var selection = $(event.target).attr("data-index");
  playlist.push(movies[selection]);
  storePlaylist();
  renderPlaylist();
}

function initPlaylist() {
  var storedPlaylist = JSON.parse(localStorage.getItem("playlist"));
  if (storedPlaylist !== null) {
    playlist = storedPlaylist;
  }

  renderPlaylist();
}

function storePlaylist() {
  localStorage.setItem("playlist", JSON.stringify(playlist));
}

function renderPlaylist() {
  moviePlaylistEl.html("");

  for (var i = 0; i < playlist.length; i++) {
    var div = $("<div>");
    div.text(playlist[i].Title);
    div.attr("data-index", i);
    var button = $("<button>");
    button.text("delete");
    moviePlaylistEl.append(div);
    div.append(button);

  }
}

moviePlaylistEl.on("click", function(event) {
  var element = $(event.target);

  if (element.is("button")) {
    var index = element.parent().attr("data-index");
    playlist.splice(index, 1);

    storePlaylist();
    renderPlaylist();
  }
});

searchBtn.on("click", function(event) {
  event.preventDefault();
  
  var userSearch = movieSearch.val().trim();
  if (userSearch === "") {
    return;
  }

  fetch(omdbapi + userSearch)
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    renderSearch(data);
    console.log(data);
  });

  movieSearch.val("");
});

initPlaylist();