import Router from 'express';

const router = Router();

// root routes
router.get('/test', (req, res) => {
    logger.info("come here");
    res.send('현재 테스트 중입니다.');
});

export default router;