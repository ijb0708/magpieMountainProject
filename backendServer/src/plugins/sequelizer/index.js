import Sequelize from sequelize;
import dbConn from "../../models";

// 개발/스태이징/운영 모드 설정
const env = process.env.NODE_ENV || 'dev';

// 설정 파일 가져오기
const config = JSON.parse(fs.readFileSync(path.join(__dirname, 'src','config.json'), 'utf-8'));

// 시퀄라이저 
const sequelize = new Sequelize("test", "1234a");

// 모델을 시퀄라이저로 초기화
Object.values(dbConn).forEach(obj => obj.init(sequelize));

dbConn.sequelize = sequelize;
dbConn.Sequelize = Sequelize;

export default dbConn;