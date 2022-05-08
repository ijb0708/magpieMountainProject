import express from 'express';
// modules
//import path from 'path';
//import bodyParser from 'body-parser';
// 설정파일
//import config from './config';
import routes from './routes/index.js';
const app = express();

//app.use(bodyParser.urlencoded({ extended: true }));
//app.use(bodyParser.json());

app.use('/', routes);
export default app;
//export default app;