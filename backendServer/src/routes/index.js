const express = require('express');
const router = express.Router();

const logger = require('../plugins/loggers');

// routes List
// const test = require('./test');

// router.use('/test', test);

// root routes
router.get('/', (req, res) => {
    logger.info("come here");
	res.send('현재 테스트 중입니다.');
});

module.exports = router;