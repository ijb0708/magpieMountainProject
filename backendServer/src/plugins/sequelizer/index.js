import Sequelize from sequelize;
import dbConn from "../../models";

// 개발/스태이징/운영 모드 설정
const env = process.env.NODE_ENV || 'dev';

const sequelize = new Sequelize();

dbConn.sequelize = sequelize;
dbConn.Sequelize = Sequelize;

export default dbConn;