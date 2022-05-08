import app from "./app.js";
import http from 'http';
import path from 'path';
import fs from 'fs';

//import { server } from './config'

const __dirname = path.resolve();

const server = http.createServer(app);

const env = process.env.NODE_ENV || 'dev';
const PORT = process.env.NODE_PORT || 6202

// 설정 파일 가져오기
const config = JSON.parse(fs.readFileSync(path.join(__dirname, 'src','config.json'), 'utf-8'));

server.listen(PORT, () => {

    console.log('server running ' + PORT);
});