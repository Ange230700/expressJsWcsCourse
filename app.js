/* eslint-disable no-unused-expressions */

const express = require('express');

const app = express();

const movies = [
  {
    id: 1,
    title: 'Citizen Kane',
    director: 'Orson Wells',
    year: '1941',
    isInBlackAndWhite: true,
    duration: 120,
  },
  {
    id: 2,
    title: 'The Godfather',
    director: 'Francis Ford Coppola',
    year: '1972',
    isInBlackAndWhite: false,
    duration: 180,
  },
  {
    id: 3,
    title: 'Pulp Fiction',
    director: 'Quentin Tarantino',
    year: '1994',
    isInBlackAndWhite: false,
    duration: 180,
  },
  {
    id: 4,
    title: 'The Shawshank Redemption',
    director: 'Frank Darabont',
    year: '1994',
    isInBlackAndWhite: false,
    duration: 180,
  },
];

const welcomeMessage = (request, response) => response
  .send('Welcome to my favourite movies list!');
const getMovies = (request, response) => response
  .status(200)
  .json(movies);
const getMovieById = (request, response) => {
  const movieId = request.params.id;
  const movie = movies.find((oneMovie) => oneMovie.id === parseInt(movieId, 10));
  movie ? response
    .status(200)
    .json(movie) : response
    .status(404)
    .send('Not found');
};

app.get('/', welcomeMessage);
app.get('/api/movies', getMovies);
app.get('/api/movies/:id', getMovieById);

module.exports = app;
