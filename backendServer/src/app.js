import express from 'express';
// modules
import bodyParser from 'body-parser';
import helmet from 'helmet';
import cors from 'cors';
import path from 'path'
// 설정파일
//import config from './config';
import routes from './routes/index.js';
import pool from './plugins/dbClient/index.js'
import logger from './plugins/logger/index.js';

const __dirname = path.resolve();

console.log(__dirname);

const app = express();

// DB연결
pool.connect(err => {
    if(err) {
        logger.error("db connection Error!!");
    }else {
        logger.info("db connection success!!");
    }
});

// 
app.use(cors({
    origin:[
        "http://localhost:6202",
        "http://localhost:3000",
        "http://localhost:80",
    ]
}))

//보안설정
app.use(helmet()); 

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// 프론트서버 및 라우터 설정
logger.error(path.join(__dirname, '/build/'));
app.use(express.static(path.join(__dirname, '/build/')));

// root routes
app.get('/', (req, res) => {
    logger.error(path.join(__dirname, '/build/index.html'));
    res.sendFile(path.join(__dirname, '/build/index.html'));
});

app.use('/', routes);

export default app;