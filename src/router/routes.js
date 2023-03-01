import Express from 'express';

import userRoutes from './user/index.js';

const router = new Express();

router.use('/user', userRoutes);


export default router;
