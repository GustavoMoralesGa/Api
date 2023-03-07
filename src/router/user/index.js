import Express from 'express';
import { createUser, deleteteUser, getAllUsers } from '../../controllers/user.js';
import { loginController } from '../../controllers/authentication.js';
import { validateJwt } from '../../middleware/validateJwt.js';


const userRouter = new Express();

userRouter.post('/register', createUser)
userRouter.post('/login', loginController)
userRouter.delete('/:userId', validateJwt, deleteteUser)
userRouter.get('/users', getAllUsers )


export default userRouter;
