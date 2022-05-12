import Router from 'express';
import logger from '../../plugins/logger/index.js';

const router = Router();

// root routes
router.get('/test', (req, res) => {
    logger.info("dommy Data");
    res.status(200).json(
        [ 
            {
                "단지명":"파르크한남",
                "전용면적":268.95,
                "시군구":"서울특별시 용산구 한남동",
                "계약년":2021,
                "계약월":12,
                "계약일":13,
                "층수":2,
                "건축년도":2020,
                "현재가":1200000,
                "최고가":1200000,
                "최저가":1150000,
                "전세가":0
            },
            {
                "단지명":"파르크한남",
                "전용면적":268.95,
                "시군구":"서울특별시 용산구 한남동",
                "계약년":2021,
                "계약월":11,
                "계약일":26,
                "층수":4,
                "건축년도":2020,
                "현재가":1170000,
                "최고가":1170000,
                "최저가":1000000,
                "전세가":0
            },
            {
                "단지명":"아이파크",
                "전용면적":203.121,
                "시군구":"서울특별시 강남구 삼성동",
                "계약년":2017,
                "계약월":8,
                "계약일":9,
                "층수":30,
                "건축년도":2004,
                "현재가":1053000,
                "최고가":1053000,
                "최저가":970000,
                "전세가":0
            },
            {
                "단지명":"르가든더메인한남",
                "전용면적":228.34,
                "시군구":"서울특별시 용산구 삼성동",
                "계약년":2021,
                "계약월":9,
                "계약일":15,
                "층수":6,
                "건축년도":2019,
                "현재가":970000,
                "최고가":970000,
                "최저가":970000,
                "전세가":0
            }
        ]
    );
});

export default router;