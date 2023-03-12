import Express  from "express";
import { createPackage } from "../../controllers/packages.js";


const packageRouter = new Express();

packageRouter.post('/register', createPackage)

export default packageRouter