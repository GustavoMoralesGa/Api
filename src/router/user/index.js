import Express from 'express';
import { createUser, deleteteUser } from '../../controllers/user.js';
import { loginController } from '../../controllers/authentication.js';

const userRouter = new Express();

userRouter.post('/register', createUser)
userRouter.post('/login', loginController)
userRouter.delete('/:userId', deleteteUser)


export default userRouter;
