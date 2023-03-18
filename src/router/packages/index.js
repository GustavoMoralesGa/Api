import Express  from "express";
import { createPackage, deletePackage, getAllPackages, updatePackage } from "../../controllers/packages.js";
import { isAdmin } from "../../middleware/isAdmin.js";
import { validateJwt } from "../../middleware/validateJwt.js";


const packageRouter = new Express();

packageRouter.post('/register', validateJwt, isAdmin, createPackage)
packageRouter.get('/allPackages',validateJwt, getAllPackages)
packageRouter.delete('/:packageId', validateJwt, isAdmin, deletePackage)
packageRouter.put('/:packageId', validateJwt, isAdmin, updatePackage)


export default packageRouter