'use strict';
// Задание на урок:

// 1) Создать переменную numberOfFilms и в неё поместить ответ от пользователя на вопрос:
// 'Сколько фильмов вы уже посмотрели?'
let numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", "");

// 2) Создать объект personalMovieDB и в него поместить такие свойства:
//     - count - сюда передается ответ на первый вопрос
//     - movies - в это свойство поместить пустой объект
//     - actors - тоже поместить пустой объект
//     - genres - сюда поместить пустой массив
//     - privat - в это свойство поместить boolean(логическое) значение false
let personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};
console.log(personalMovieDB);

// 3) Задайте пользователю по два раза вопросы:
//     - 'Один из последних просмотренных фильмов?'
//     - 'На сколько оцените его?'
// Ответы стоит поместить в отдельные переменные
// Записать ответы в объект movies в формате: 
//     movies: {
//         'logan': '8.1'
//     }
let question1 = prompt("Один из последних просмотренных фильмов?", ""),
    question11 = +prompt("На сколько оцените его?");

let question2 = prompt("Один из последних просмотренных фильмов?", ""),
    question22 = +prompt("На сколько оцените его?");

personalMovieDB.movies[question1] = question11;
personalMovieDB.movies[question2] = question22;

console.log(personalMovieDB);
// Проверить, чтобы все работало без ошибок в консоли

