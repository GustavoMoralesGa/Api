import Express from 'express';
import packageRouter from './packages/index.js';
import userRoutes from './user/index.js';
import schedulesRoutes from './schedules/index.js';

const router = new Express();

router.use('/user', userRoutes);
router.use('/package', packageRouter)
router.use('/agenda', schedulesRoutes)


export default router;
