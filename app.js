const express = require('express');
const app = express();
const port = 5000;

app.listen(
    port, (error) => error ? console.log(
        'Something went wrong', error
    ) : console.log(
        `Server is running on port ${port}`
    )
)