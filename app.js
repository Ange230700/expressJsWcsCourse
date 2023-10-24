const express = require('express');
const app = express();
const port = process.env.SERVER_PORT || 5000;

const movies = [
    {
        id: 1,
        title: 'Citizen Kane',
        director: 'Orson Wells',
        year: '1941',
        isInBlackAndWhite: true,
        duration: 120
    },
    {
        id: 2,
        title: 'The Godfather',
        director: "Francis Ford Coppola",
        year: '1972',
        isInBlackAndWhite: false,
        duration: 180
    },
    {
        id: 3,
        title: 'Pulp Fiction',
        director: 'Quentin Tarantino',
        year: '1994',
        isInBlackAndWhite: false,
        duration: 180
    },
    {
        id: 4,
        title: 'The Shawshank Redemption',
        director: 'Frank Darabont',
        year: '1994',
        isInBlackAndWhite: false,
        duration: 180
    },
    {
        id: 5,
        title: 'The Dark Knight',
        director: 'Christopher Nolan',
        year: '2008',
        isInBlackAndWhite: false,
        duration: 180
    }
];

const welcomeMessage = (request, response) => response
    .send('Welcome to my favourite movies list!');
const getMovies = (request, response) => {
    if (request.query.limit) {
        if (request.query.isInBlackAndWhite) {
            const blackAndWhiteMovies = movies.filter(movie => movie.isInBlackAndWhite === true);
            const moviesToSend = blackAndWhiteMovies.slice(0, request.query.limit);
            response
                .status(200)
                .json(moviesToSend)
        } else {
            const moviesToSend = movies.slice(0, request.query.limit);
            response
                .status(200)
                .json(moviesToSend)
        }
    } else {
        if (request.query.isInBlackAndWhite) {
            const blackAndWhiteMovies = movies.filter(movie => movie.isInBlackAndWhite === true);
            response
                .status(200)
                .json(blackAndWhiteMovies)
        } else {
            response
                .status(200)
                .json(movies)
        }
    }
};
const getMovieById = (request, response) => {
    const movieId = request.params.id;
    const movie = movies.find(movie => movie.id === parseInt(movieId));
    movie ? response
        .status(200)
        .json(movie) : response
            .status(404)
            .send('Not found')
}

app.get('/', welcomeMessage);
app.get('/api/movies', getMovies);
app.get('/api/movies/:id', getMovieById);

app.listen(
    port, (error) => error ? console.error(
        'Something went wrong', error
    ) : console.log(
        `Server is running on port ${port}`
    )
)