import { Router } from 'express';
import { createUser, deleteteUser, getAllUsers, getAllUsersData, updateUser } from '../../controllers/user.js';
import { loginController } from '../../controllers/authentication.js';
import { validateJwt } from '../../middleware/validateJwt.js';
import { isAdmin } from '../../middleware/isAdmin.js';


const userRouter = Router();

userRouter.post('/register', createUser)
userRouter.post('/login', loginController)
userRouter.delete('/:userId', validateJwt, isAdmin, deleteteUser)
userRouter.put('/:userId', validateJwt ,updateUser)
userRouter.get('/users', validateJwt, isAdmin, getAllUsers )
userRouter.get('/allUsers', validateJwt, isAdmin, getAllUsersData)

export default userRouter;
