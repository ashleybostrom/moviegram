var genreSelEl = $("genreSel");
var genreResults = $("genreResults-btn");
var moodSelEl = $("moodSel");
var moodResults = $("moodResults-btn");
var moviePlaylistEl = $("movieplist");

console.log('Mood Selection', moodSelEl.val());
console.log('Genre Selection', genreSelEl.val());

var tmdbapi = 'https://api.themoviedb.org/3/movie/76341?api_key=bd949d583d67c785ccc8d2de7703c463';
var imgpath = 'https://image.tmdb.org/t/p/w1280';
var movies;
var playlist = [];

document.addEventListener('DOMContentLoaded', function () {
    var input = document.getElementById('moods');
    if (localStorage ['moodSel]']) { //if mood is chosen
        input.value = localStorage['moodSel']; //set the value
    }
    input.onchange = function () {
        localStorage['moodSel'] = this.value; //change localStorage on change
    }
});

let genreresaction = fetch('https://api.themoviedb.org/3/discover/movie?api_key=bd949d583d67c785ccc8d2de7703c463&language=en-US&include_adult=false&include_video=false&page=1&with_genres=true&total_results=10')
    //.then(res => res.json()).then(data => console.log(data));
      .then(res => res.json()).then(function(data)

    document.addEventListener('DOMContentLoaded', function () {
        var input = document.getElementById('genres');
        if (localStorage ['genreSel']) { //if genre is chosen
            input.value = localStorage['genreSel']; //set the value
        }
        input.onchange = function () {
            localStorage['genreSel'] = this.value; //change localStorage on change
        }
    });