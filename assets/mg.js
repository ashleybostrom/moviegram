var genreSel = $("#genres");
var genreSubmit = $("#genreBtn");
 
var moodSel = $("#moods");
var moodSubmit = $("#moodBtn");
var moviePlaylistEl = $("#movieplist");

var tmdbapi = "https://api.themoviedb.org/3/search/keyword?api_key=c560270447805eeaa48cfdda957f60b7&query=";
// var movies;
// var playlist = [];




genreSubmit.on("click", function() {
    fetch(tmdbapi + genreSel.val())
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        console.log(data);
    });
});

moodSubmit.on("click", function() {
    console.log(moodSel.val());
});