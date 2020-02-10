const http = require(`http`);

const hostName = `127.0.0.1`;
const port = 8000;

const server = http.createServer((request, response) => {
    response.statusCode = 200;
    response.setHeader(`Content-Type`, `text/plain`);
    response.end(`Response ended`);
});

server.listen(port, hostName, () => {
    console.log(`Server ${hostName} listening on port ${port}`);
})