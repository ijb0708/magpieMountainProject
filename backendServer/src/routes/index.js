import Router from 'express';

import test from './test/index.js';
import admin from './admin/index.js'

const router = Router();

// routes List
router.use('/test', test);
router.use('/admin', admin);

export default router;