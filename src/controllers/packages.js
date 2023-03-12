import {  createPackage as createPackageModel,
          getAllPackages as getAllPackagesModel,
          deletePackage as deletePackageModel,
          updatePackage as updatePackageModel } from "../models/packages.js";

export const createPackage = async (req, res) => {
  try {
    const packagePayload = req.body;
    const packageCreated = await createPackageModel(packagePayload)
    res.send(packageCreated)
  } catch (e) {
    console.log('Error in package Controller' ,e);
    res.status(500).send(e)
  }
}

export const getAllPackages = async (_req, res) => {
  try {
    const allPackageData = await getAllPackagesModel()
    res.status(200).send(allPackageData)
  } catch (e) {
    res.status(500).send(e)
  }
}

export const deletePackage = async (req, res) => {
  try {
    const { user } = req;
    if (user.role === 'ADMIN') {
      const packageId = parseInt(req.params.packageId, 10);
      await deletePackageModel(packageId)
      res.status(204).send();
    } else {
      res.status(403).send({ error: 'Anauthorized' });
  }} catch (e) {
    res.status(500).send(e)
  }
}

export const updatePackage = async (req, res) => {
  try {
    const packageId = parseInt(req.params.packageId, 10);
    if (req.user.role === 'ADMIN') {
      const data = req.body;
      const updatedPackage = await updatePackageModel(packageId, data)
      res.status(201).send(updatedPackage); 
    } else {
      res.status(403).send({ error: 'Forbidden' })
    }
  } catch (e) {
    res.status(500).send(e)
  }
}