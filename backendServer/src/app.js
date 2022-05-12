import express from 'express';
// modules
import bodyParser from 'body-parser';
import helmet from 'helmet';
import cors from 'cors';
// 설정파일
//import config from './config';
import routes from './routes/index.js';

const app = express();

// 
app.use(cors({
    origin:[
        "http://localhost:6202",
        "http://localhost:3000",
    ]
}))

//보안설정
app.use(helmet()); 

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use('/', routes);

export default app;