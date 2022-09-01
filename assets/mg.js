var genreSel = $("genreSel");
var genreResults = $("genreResults-btn");
var moodSel = $("moodSel");
var moodResults = $("moodResults-btn");
var moviePlaylistEl = $("movieplist");

console.log('Genre Selection', genreSelEl.val());
console.log('Mood Selection', moodSelEl.val());

var tmdbapi = 'https://api.themoviedb.org/3/movie/76341?api_key=c560270447805eeaa48cfdda957f60b7';
var movies;
var playlist = [];


