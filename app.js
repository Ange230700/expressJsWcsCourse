const express = require('express');
const app = express();
const port = 5000;
const handler = (request, response) => {
    response.send('Validated');
};
const handler2 = (request, response) => {
    response.status(404).send('Cannot find the requested page');
};
const handler3 = (request, response) => {
    response.sendStatus(200);
};
const handler4 = (request, response) => {
    response.json(
        {
            result: '10 items found'
        }
    );
};
const handler5 = (request, response) => {
    response.end();
};
const welcomeName = (request, response) => response.send(
    `Welcome ${request.params.name}`
);

const cocktails = [
    {
        id: 1,
        name: 'Mojito',
        price: 8,
        isAlcoholic: true
    },
    {
        id: 2,
        name: 'Lemonade',
        price: 5,
        isAlcoholic: false
    },
    {
        id: 3,
        name: 'Long Island Ice Tea',
        price: 12,
        isAlcoholic: true
    },
    {
        id: 4,
        name: 'Pina Colada',
        price: 10,
        isAlcoholic: true
    },
    {
        id: 5,
        name: 'Strawberry Daiquiri',
        price: 11,
        isAlcoholic: true
    }
];

const getCocktails = (request, response) => response
    .status(200)
    .json(cocktails);

app.get(
    '/', handler
);

app.get(
    '/handler2', handler2
);

app.get(
    '/handler3', handler3
);

app.get(
    '/handler4', handler4
);

app.get(
    '/handler5', handler5
);

app.get(
    '/users/:name', welcomeName
);

app.get(
    '/api/cocktails', getCocktails
)

app.listen(
    port, (error) => error ? console.error(
        'Something went wrong', error
    ) : console.log(
        `Server is running on port ${port}`
    )
)