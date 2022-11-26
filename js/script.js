"use strict";
let numberOfFilms;

function start(){
    numberOfFilms = +prompt("How many films have you watched?", "");
    while (numberOfFilms == "" || numberOfFilms == null || isNaN(numberOfFilms)){
        numberOfFilms = +prompt("How many films have you watched?", "");
    }
}

start();

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    private: false
};

function rememberMyFilms(){
    for(let i = 0; i<2; i++){
        const a = prompt("What is a last film that you watched", ""),
        b = prompt("Please estimate this movie","");
        if(a!=null && b!=null && a!="" && b!="" && a.length<50){
            personalMovieDB.movies[a] = b;
            console.log("Done"); 
        }
        else{
            console.log("Error");
            i--;
        }
    }
}
//rememberMyFilms();
function detectPersonalLevel(){
    if(personalMovieDB.count<10){
        console.log("You are a begginer in a movie watch");
    }
    else if(personalMovieDB.count>=10 && personalMovieDB.count<30){
        console.log("You are a classic movie watcher");
    }
    else if(personalMovieDB.count>=30){
        console.log("You are a kinoman");
    }
    else {
        console.log("Error has occured");
    }
}
//detectPersonalLevel();

function showMyDB(hidden){
    if(!hidden){
        console.log(personalMovieDB);
    }
}
showMyDB(personalMovieDB.private);

function writeYourGenres(){
    for(let i = 1; i<=3; i++){
        const genre = prompt(`Your favorite genre is ${i}`);
        personalMovieDB.genres[i-1] = genre;
    }
}

writeYourGenres();

