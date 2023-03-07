import { getUserPassword, getUser } from '../models/user.js';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';

const JWT_SECRET = process.env.ACCESS_TOKEN_SECRET;

export const loginController = async (req, res) => {
  try {
    const { email, password } = req.body;
    const { password: dataBasePassword } = await getUserPassword(email);
    const isCorrectPassword = bcrypt.compareSync(password, dataBasePassword)
    if (isCorrectPassword ) {
      const user = await getUser(email);
      const token = jwt.sign({user}, JWT_SECRET, {expiresIn: '1day'})
      res.status(200).send(token);
    } else {
      throw new Error('Login Failed');
    }
  } catch (e) {
    console.log(e)
    res.status(403).send({ message: 'Forbidden' });
  }
};