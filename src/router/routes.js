import express from 'express';
import packageRouter from './packages/index.js';
import userRoutes from './user/index.js';
import schedulesRoutes from './schedules/index.js';
import listEndpoints from 'express-list-endpoints';
// import ticketRoutes from './tickets/index.js';

const router = express.Router();

router.use('/user', userRoutes);
router.use('/package', packageRouter)
router.use('/package/:packageId', schedulesRoutes)
// router.use('/package/:packageId/schedule/:scheduleId/ticket', ticketRoutes)


// Prints all routes to console
if (process.env.MODE === 'development') {
  const endpoints = listEndpoints(router);
  endpoints.forEach((route) => {
    route.methods.forEach((method) => {
      console.log(`${method}\t${route.path}`);
    });
  });
}

// Export main router
export default router;
