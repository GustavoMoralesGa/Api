import express  from "express";
import { createPackage, deletePackage, getAllPackages, getPackageById, updatePackage } from "../../controllers/packages.js";
import { isAdmin } from "../../middleware/isAdmin.js";
import { validateJwt } from "../../middleware/validateJwt.js";


const packageRouter = express.Router();

packageRouter.post('/register', validateJwt, isAdmin, createPackage)
packageRouter.get('/allPackages', getAllPackages)
packageRouter.get('/:packageId', getPackageById)
packageRouter.delete('/:packageId', validateJwt, isAdmin, deletePackage)
packageRouter.put('/:packageId', validateJwt, isAdmin, updatePackage)


export default packageRouter