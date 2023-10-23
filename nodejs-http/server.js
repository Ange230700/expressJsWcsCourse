const http = require('http');
const port = 8000;
const requestHandler = (request, response) => {
    console.log(request.url);
    response.end('Hello Node.js Server!');
}
const server = http.createServer(requestHandler);
server.listen(
    port,
    (error) => error ? console.log(
        error
        ) : console.log(
            `Server is listening on ${port}`
    )
)