import Express from 'express';
import { createUser } from '../../controllers/user.js';

const userRouter = new Express();

userRouter.post('/register', createUser)

export default userRouter;
