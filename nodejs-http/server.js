const http = require('http');
const port = 8000;
const requestHandler = (request, response) => {
    console.log(request.url);
    // response.end('Hello Node.js Server!');
    if (request.url === '/') {
        response.end('Hello Node.js Server!');
    }
    else if (request.url === '/about') {
        response.end('This demonstrates routing in Node.js!');
    }
    else {
        response.end('Default page (URLs other than / and /about)')
    }
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