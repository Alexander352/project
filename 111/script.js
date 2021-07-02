const numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", "");
const personalMoviesDB = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  private: false,
};
const a = prompt("Один из последних фильмов?", ""),
  b = prompt("На сколько оцените его?", ""),
  c = prompt("Один из последних фильмов?", ""),
  d = prompt("На сколько оцените его?", "");

personalMoviesDB.movies[a] = b;
personalMoviesDB.movies[c] = d;

console.log(personalMoviesDB);
