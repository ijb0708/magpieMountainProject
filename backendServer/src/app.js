import express from 'express';
// modules
import bodyParser from 'body-parser';
import helmet from 'helmet'
import sequelize from './plugins/sequelizer/index';
import logger from './plugins/logger/index.js';
// 설정파일
//import config from './config';
import routes from './routes/index.js';

const app = express();

sequelize.sync({force: false})
.then(() => {
    logger.info("DB conn Succes");
}).catch(err => {
    logger.info("DB conn Error");
})

app.use(helmet());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use('/', routes);

export default app;