import Express from 'express';
import { createUser } from '../../controllers/user.js';
import { loginController } from '../../controllers/authentication.js';

const userRouter = new Express();

userRouter.post('/register', createUser)
userRouter.post('/login', loginController)


export default userRouter;
