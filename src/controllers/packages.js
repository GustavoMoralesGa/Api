import { createPackage as createPackageModel } from "../models/packages.js";

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