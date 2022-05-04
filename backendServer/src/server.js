import app from ('./app');
import http from ('http');
const server = http.createServer(app);

// import { server } from './config'

const PORT = process.env.PORT || 6202

server.listen(PORT, () => {

    console.log('server running ' + PORT);
});