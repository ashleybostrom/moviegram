var movieSearch = $("#movieSearch");
var searchBtn = $("#searchBtn");
var searchResults = $("#searchResults");
var moviePlaylistEl = $("#movieplist");

var omdbapi = "http://www.omdbapi.com/?apikey=ab9eb185&s=";
var movies;
var playlist = [];


//Renders the movie search results
function renderSearch(results) {
  searchResults.html("");
  movies = results.Search;
  
  for (i = 0; i < movies.length; i++) {
    //Search results
    var li = $("<li>");
    li.text(movies[i].Title);
    li.attr("data-index", i);
    li.addClass("rounded bg-green-500 hover:bg-green-600 m-1")
    searchResults.append(li);

    li.on("click", saveMovie);
  }

}

//saves movie selection to your playlist
function saveMovie(event) {
  var selection = $(event.target).attr("data-index");
  playlist.push(movies[selection]);
  storePlaylist();
  renderPlaylist();
}

//Initilizes stored playlist
function initPlaylist() {
  var storedPlaylist = JSON.parse(localStorage.getItem("playlist"));
  if (storedPlaylist !== null) {
    playlist = storedPlaylist;
  }

  renderPlaylist();
}

//stores playlist in local storage
function storePlaylist() {
  localStorage.setItem("playlist", JSON.stringify(playlist));
}

//Renders your plyalists
function renderPlaylist() {
  moviePlaylistEl.html("");

  for (var i = 0; i < playlist.length; i++) {
    //Playlist Items
    var div = $("<div>");
    div.text(playlist[i].Title);
    div.attr("data-index", i);
    div.addClass("rounded border-2 border-gray-600 m-1");

    //Delete button
    var button = $("<button>");
    button.text("delete");
    button.addClass("rounded px-2 bg-red-600 hover:bg-red-700");

    moviePlaylistEl.append(div);
    div.append(button);

  }
}

//Event listener for movie selection
moviePlaylistEl.on("click", function(event) {
  var element = $(event.target);

  if (element.is("button")) {
    var index = element.parent().attr("data-index");
    playlist.splice(index, 1);

    storePlaylist();
    renderPlaylist();
  }
});

//Event listener for search submit button
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