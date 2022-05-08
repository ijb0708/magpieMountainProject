import app from "./app.js";
import http from 'http';

//import { server } from './config'

const server = http.createServer(app);
const PORT = process.env.PORT || 6202

server.listen(PORT, () => {

    console.log('server running ' + PORT);
});