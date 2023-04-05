import { Router } from 'express'
// import { isAdmin } from "../../middleware/isAdmin.js";
// import { validateJwt } from "../../middleware/validateJwt.js";

const ticketRoutes = Router();

ticketRoutes.post('/')
ticketRoutes.get('/:ticketId')
ticketRoutes.delete('/:ticketId')
ticketRoutes.put('/:ticketId')


export default ticketRoutes;