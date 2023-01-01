"use strict";

const personalMovieDB = {
  count: 0,
  movies: {},
  actors: {},
  genres: [],
  private: false,
  start: function () {
    personalMovieDB.count = +prompt("How many films have you watched?", "");
    while (
      personalMovieDB.count == "" ||
      personalMovieDB.count == null ||
      isNaN(personalMovieDB.count)
    ) {
      personalMovieDB.count = +prompt("How many films have you watched?", "");
    }
  },
  rememberMyFilms: function () {
    for (let i = 0; i < 2; i++) {
      const a = prompt("What is a last film that you watched", "").trim(),
        b = prompt("Please estimate this movie", "").trim();
      if (a != null && b != null && a != "" && b != "" && a.length < 50) {
        personalMovieDB.movies[a] = b;
        console.log("Done");
      } else {
        console.log("Error");
        i--;
      }
    }
  },
  detectPersonalLevel: function () {
    if (personalMovieDB.count < 10) {
      console.log("You are a begginer in a movie watch");
    } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
      console.log("You are a classic movie watcher");
    } else if (personalMovieDB.count >= 30) {
      console.log("You are a kinoman");
    } else {
      console.log("Error has occured");
    }
  },
  showMyDB: function (hidden) {
    if (!hidden) {
      console.log(personalMovieDB);
    }
  },
  toggleVisilbleMyDB: function () {
    if (personalMovieDB.private) {
      personalMovieDB.private = false;
    } else {
      personalMovieDB.private = true;
    }
  },
  writeYourGenres: function () {
    for (let i = 1; i <= 3; i++) {
      const genre = prompt(`Your favorite genre is ${i}`);
      if (genre === "" || genre == null) {
        console.log("Wrong data");
        i--;
      } else {
        personalMovieDB.genres[i - 1] = genre;
      }
    }
    personalMovieDB.genres.forEach((item, i) => {
      console.log(`Your favorite genres are: ${i + 1}: ${item}`);
    });
  },
};
