import Express from 'express';
import packageRouter from './packages/index.js';
import userRoutes from './user/index.js';
import schedulesRoutes from './schedules/index.js';
import ticketRoutes from './tickets/index.js';

const router = new Express();

router.use('/user', userRoutes);
router.use('/package', packageRouter)
router.use('/package', schedulesRoutes)
router.use('/package/:packageId/schedule/:scheduleId/ticket', ticketRoutes)

export default router;
