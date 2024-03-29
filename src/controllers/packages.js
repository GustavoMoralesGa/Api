import {  createPackage as createPackageModel,
          getAllPackages as getAllPackagesModel,
          deletePackage as deletePackageModel,
          updatePackage as updatePackageModel,
          getPackageById as getPackageByIdModel } from "../models/packages.js";

export const createPackage = async (req, res) => {
  try {
    const {
      title,
      description,
      groupMin,
      groupMax,
      packageValue,
      valuePerPerson,
      duration,
      conditions,
      locationLat,
      locationLong,
    }= req.body;
    const packagePayload = {
      title,
      description,
      groupMin,
      groupMax,
      packageValue,
      valuePerPerson,
      duration,
      conditions,
      locationLat,
      locationLong,
    };
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

export const getPackageById = async (req, res) => {
  try {
    const packageId = parseInt(req.params.packageId, 10);
    const packageData = await getPackageByIdModel(packageId);
    res.status(200).send(packageData)
  } catch (e) {
    res.status(500).send(e)
  }
}

export const deletePackage = async (req, res) => {
  try {
    const packageId = parseInt(req.params.packageId, 10);
    await deletePackageModel(packageId)
    res.status(204).send();
  } catch (e) {
    res.status(500).send(e)
  }
}

export const updatePackage = async (req, res) => {
  try {
    const packageId = parseInt(req.params.packageId, 10);
    const data = req.body;
    const updatedPackage = await updatePackageModel(packageId, data)
    res.status(201).send(updatedPackage); 
  } catch (e) {
    res.status(500).send(e)
  }
}
