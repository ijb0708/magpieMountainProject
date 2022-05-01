const app = require('./app');
const http = require('http');
const server = http.createServer(app);

const config = require('./config').server;

const PORT = process.env.PORT || config.port;

server.listen(PORT, () => {

    console.log('server running ' + PORT);
});