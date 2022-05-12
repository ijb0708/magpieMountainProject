import express from 'express';
// modules
import bodyParser from 'body-parser';
import helmet from 'helmet'
// 설정파일
//import config from './config';
import routes from './routes/index.js';

const app = express();

app.use(helmet());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use('/', routes);

export default app;