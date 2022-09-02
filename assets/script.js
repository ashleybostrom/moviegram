var movieSearch = $("#movieSearch");
var searchBtn = $("#searchBtn");
var searchResults = $("#searchResults");
var moviePlaylistEl = $("#movieplist");
var genreSel = $("#genres");
var genreSubmit = $("#genreBtn");
var moodSel = $("#moods");
var moodSubmit = $("#moodBtn");
var moviePlaylistEl = $("#movieplist");

var tmdbGenre = "https://api.themoviedb.org/3/discover/movie?api_key=c560270447805eeaa48cfdda957f60b7&language=en-US&sort_by=popularity.desc&with_genres=";
var tmdbapi = "https://api.themoviedb.org/3/search/keyword?api_key=c560270447805eeaa48cfdda957f60b7&query=";
var omdbapi = "https://www.omdbapi.com/?apikey=ab9eb185&s=";
var getId1 = "https://api.themoviedb.org/3/movie/";
var getId2 = "/external_ids?api_key=c560270447805eeaa48cfdda957f60b7";
var getMovieData = "https://www.omdbapi.com/?apikey=ab9eb185&i="

var movies;
var playlist = [];
var ids = [];
var imdbIds = [];


//Renders the movie search results
function renderSearch(results) {
  searchResults.html("");
  movies = results.Search;
  console.log(results);
  
  for (i = 0; i < movies.length; i++) {
    //Search results
    var li = $("<li>");
    li.text(movies[i].Title);
    li.attr("data-index", i);
    li.addClass("rounded bg-sky-500 hover:bg-sky-600 m-1")
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
    div.attr("data-index", i);
    div.addClass("rounded border-2 border-green-700 bg-green-400 m-1 p-1 flex flex-col");

    //Title
    var title = $("<span>")
    title.text(playlist[i].Title);
    title.addClass("rounded bg-green-500 p-1")

    //Poster
    var container = $("<div>");
    var img = $("<img>");
    img.attr("src", playlist[i].Poster);

    //Delete button
    var button = $("<button>");
    button.text("delete");
    button.addClass("rounded px-2 bg-red-600 hover:bg-red-700");

    //Year
    var year = $("<span>");
    year.text(playlist[i].Year);
    year.addClass("rounded bg-gray-400 p-1")

    //Append Elements
    moviePlaylistEl.append(div);
    div.append(title);
    div.append(year);
    div.append(container);
    container.append(img);
    div.append(button);
  }
}

//reads response data from TMDB API 
function parseData(response) {
  console.log(response);
  var results = response.results;
  imdbIds = [];

  for (var i = 0; i < results.length; i++) {
    fetch(getId1 + results[i].id + getId2)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      fetch(getMovieData + data.imdb_id)
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {
        imdbIds.push(data);
      });
    });
  }
  var conversion = {
    Search: imdbIds
  }

  renderSearch(conversion);
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

  //OMDB API Fetch request
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

//Event listener for genre submit button
genreSubmit.on("click", function() {
  fetch(tmdbGenre + genreSel.val())
  .then(function (response) {
      return response.json();
  })
  .then(function (data) {
      parseData(data);
  });
});

initPlaylist();