import express from 'express';
// modules
import path from 'path';
import fs from 'fs';
import bodyParser from 'body-parser';
// 설정파일
//import config from './config';
import routes from './routes/index.js';

const __dirname = path.resolve();
const config = JSON.parse(fs.readFileSync(path.join(__dirname, 'src','config.json'), 'utf-8')).dev;

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use('/', routes);
export default app;