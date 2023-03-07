import { createUser as createUserModel, 
         deleteUser as deleteUserModel, 
         updateUser as updateUserModel } from "../models/user.js";
import bcrypt from 'bcryptjs';

export const createUser = async (req, res) => {
  try {
    const userPayload = req.body;
    userPayload.password = bcrypt.hashSync(userPayload.password);
    const userCreated = await createUserModel(userPayload);
    res.send(userCreated)
  } catch (e) {
    console.log('Error in user Controller', e);
    res.status(500).send(e)
  }
};

export const deleteteUser = async (req, res) => {
  try {
    const { user } = req;
    if (user.role === 'ADMIN') {
      const userId = parseInt(req.params.userId, 10);
      await deleteUserModel(userId)
      res.status(204).send();
    } else {
      res.status(403).send({ error: 'Unauthorized' });
    }
  } catch (e) {
    if (e.code === 'P2025') {
      res.status(404).send({
        error: 'not-found',
      })
    } 
    res.status(500).send(e)
  }
}

export const updateUser = async (req, res) => {
  try {
    const userPayload = req.body
    await updateUserModel(userPayload)    
  } catch (e) {
    res.status(500).send(e)
  }
}