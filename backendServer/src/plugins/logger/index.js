import {createLogger, format, transports} from 'winston';
import winstonDaily from 'winston-daily-rotate-file';

const logger = createLogger({
    format : format.combine(
        format.timestamp({
            format : 'YYYY-MM-DD HH:mm:ss'
        }),
        format.colorize({
            all : true
        }),
        format.printf(
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
        new transports.Console({
            handleExceptions : true
        })
    ]
});

export default logger;
    