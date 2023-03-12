import Express from 'express';
import packageRouter from './packages/index.js';
import userRoutes from './user/index.js';

const router = new Express();

router.use('/user', userRoutes);
router.use('/package', packageRouter)


export default router;
