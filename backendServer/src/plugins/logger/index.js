const winston = require('winston');
const winstonDaily = require('winston-daily-rotate-file');
const wFormat = winston.format;

module.exports = winston.createLogger({
    format : wFormat.combine(
        wFormat.timestamp({
            format : 'YYYY-MM-DD HH:mm:ss'
        }),
        wFormat.colorize({
            all : true
        }),
        wFormat.printf(
            (info) => info.timestamp + ' [' + info.level + '] ' + info.message
        )
    ),
    transports : [
        // info 레벨 로그를 저장할 파일 설정
        new winstonDaily({
            level: 'info',
            datePattern: 'YYYY-MM-DD',
            dirname: "./logs",
            filename: `info_%DATE%.log`,
            maxFiles: 30,  // 로그파일 저장기간
            zippedArchive: true, 
        }),
        new winston.transports.Console({
            handleExceptions : true
        })
    ]
});