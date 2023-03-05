import { createUser as createUserModel, deleteUser } from "../models/user.js";
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
      const userId = parseInt(req.params.userId);
      await deleteUser(userId)
      res.status(204).send();
    } else {
      res.status(403).send({ error: 'Unauthorized' });
    }
  } catch (e) {
    res.status(500).send(e)
  }
}