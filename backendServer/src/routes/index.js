import Router from 'express';
import logger from '../plugins/logger/index.js';

import test from './testData/index.js';

const router = Router();

// routes List

// root routes
router.get('/', (req, res) => {
    logger.info("come here");
    //res.send('현재 테스트 중입니다.');
    res.status(200).json({"test":"test"});
});

router.use('/test', test);

export default router;