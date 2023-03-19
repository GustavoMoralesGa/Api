import {  createUser as createUserModel, 
          deleteUser as deleteUserModel, 
          updateUser as updateUserModel,
          getAllUsers as getAllUsersModel,
          getAllUsersData as getAllUsersDataModel } from "../models/user.js";
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
      const userId = parseInt(req.params.userId, 10);
      await deleteUserModel(userId)
      res.status(204).send();
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
    const userId = parseInt(req.params.userId, 10);
    if (req.user.role === 'ADMIN' || req.user.id === userId) {
      const {
        name,
        lastName,
        password,
        passwordConfirmation,
      } = req.body;
      if (password && password !== passwordConfirmation) {
        req.status(503).send({
          error: 'password mismatch',
        })
      }
      const dataToUpdate = {
        name,
        lastName,
        password: bcrypt.hashSync(password),
      };
      const updatedUser = await updateUserModel(userId, dataToUpdate);
      res.status(201).send(updatedUser);
    } else {
      res.status(403).send({ error: 'Forbidden '});
    }
  } catch (e) {
    console.log(e)
    res.status(500).send(e)
  }
}

export const getAllUsers = async (_req, res) => {
  try {
    const allUsers = await getAllUsersModel()
    res.status(200).send(allUsers)
  } catch (e) {
    res.status(500).send(e)
  }
}

export const getAllUsersData = async (_req, res) => {
  try {
    const allUserData = await getAllUsersDataModel()
    res.status(200).send(allUserData)
  } catch (e) {
    res.status(500).send(e)
  }
}
