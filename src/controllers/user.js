import { createUser as createUserModel } from "../models/user.js";
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
