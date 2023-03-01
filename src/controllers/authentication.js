import { getUserPassword, createUser } from '../models/user.js';
// import jwt from 'jsonwebtoken';
// import bcrypt from 'bcryptjs';

export const loginController = async (req, res) => {
  try {
    const { email, password } = req.body;
    const dataBasePassword = await getUserPassword();
    

    // TODO: Hash and compare
    // TODO: Generate Token
    // TODO: Send Result

    res.status(200).send(token);
  } catch (e) {
    res.status(403).send({ message: 'Forbidden' });
  }
};

export const registerController = async (req, res) => {
  res.send({ hi: 'world' });
};
