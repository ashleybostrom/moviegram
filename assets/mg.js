
var genreSel = $("#genres");
var genreSubmit = $("#genreBtn");
 
var moodSel = $("#moods");
var moodSubmit = $("#moodBtn");
var moviePlaylistEl = $("#movieplist");

var tmdbapi = "https://api.themoviedb.org/3/search/keyword?api_key=c560270447805eeaa48cfdda957f60b7&query=";
// var movies;
// var playlist = [];


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


// Creating var and loop for mood IDs
var moodAPI =  "https://api.themoviedb.org/3/discover/movie?api_key=bd949d583d67c785ccc8d2de7703c463&language=en-US&include_adult=false&include_video=false&page=1&with_keywords=happy%2Cmelancholic%2Cheady%2Ccurious%2Cexcited%2Ccelebratory%2Ctired%2Ceasygoing%2Cdramatic%2Crelaxing%20"
var moodwords = 'happy,melancholic,heady,curious,excited,celebratory,tired,easygoing,dramatic,relaxing'
var moodArr = moodwords.split (',');
console.log(moodArr);

//Accessing individual values
alert(moodArr[0]);
alert(moodArr[1]);
alert(moodArr[2]);
alert(moodArr[3]);
alert(moodArr[4]);
alert(moodArr[5]);
alert(moodArr[6]);
alert(moodArr[7]);
alert(moodArr[8]);
alert(moodArr[9]);


let moodresaction = fetch('https://api.themoviedb.org/3/discover/movie?api_key=bd949d583d67c785ccc8d2de7703c463&language=en-US&include_adult=false&include_video=false&page=1&with_keywords=happy%2Cmelancholic%2Cheady%2Ccurious%2Cexcited%2Ccelebratory%2Ctired%2Ceasygoing%2Cdramatic%2Cpent%2Cup%20')   
    if (response.ok) {
        return response.json();
    }

//
        

document.addEventListener('DOMContentLoaded', function () {
    var input = document.getElementById('moods');
    if (localStorage ['moodSel]']) { //if mood is chosen
        input.value = localStorage['moodSel']; //set the value
    }
    input.onchange = function () {
        localStorage['moodSel'] = this.value; //change localStorage on change
    }
});

var genreAPI = "https://api.themoviedb.org/3/discover/movie?api_key=bd949d583d67c785ccc8d2de7703c463&language=en-US&include_adult=false&include_video=false&page=1&with_genres=true"

let genreresaction = fetch('https://api.themoviedb.org/3/discover/movie?api_key=bd949d583d67c785ccc8d2de7703c463&language=en-US&include_adult=false&include_video=false&page=1&with_genres=true&total_results=10')
    //.then(res => res.json()).then(data => console.log(data));
       if (response.ok) {
        return response.json();
      }

// Array IDs for Action, Thriller, Sci-Fi, Documentary, Comedy, Adventure, Romance, Westerns, Horror, Drama
var arrayids = [28, 53, 878, 99, 35, 12, 10749, 37, 27, 18] 

let txt = "";
for (let x in arrayids) {
    txt += arrayids[x];
}





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

    document.addEventListener('DOMContentLoaded', function () {
        var input = document.getElementById('genres');
        if (localStorage ['genreSel']) { //if genre is chosen
            input.value = localStorage['genreSel']; //set the value
        }
        input.onchange = function () {
            localStorage['genreSel'] = this.value; //change localStorage on change
        }
    });
