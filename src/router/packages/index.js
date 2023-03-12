import Express  from "express";
import { createPackage, deletePackage, getAllPackages, updatePackage } from "../../controllers/packages.js";
import { validateJwt } from "../../middleware/validateJwt.js";


const packageRouter = new Express();

packageRouter.post('/register', createPackage)
packageRouter.get('/allPackages', getAllPackages)
packageRouter.delete('/:packageId', validateJwt, deletePackage)
packageRouter.put('/:packageId', validateJwt, updatePackage)


export default packageRouter