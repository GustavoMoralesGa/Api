import Express from "express";
import { createSchedule, deleteSchedule, getAllSchedule, updateSchedule } from "../../controllers/schedules.js";
import { isAdmin } from "../../middleware/isAdmin.js";
import { validateJwt } from "../../middleware/validateJwt.js";

const scheduleRoutes = new Express();

scheduleRoutes.post('/:packageId/schedule', validateJwt, isAdmin, createSchedule)
scheduleRoutes.get('/schedules', validateJwt, isAdmin, getAllSchedule)
scheduleRoutes.get('/schedules/:schedulesId')
scheduleRoutes.delete('/:scheduleId',validateJwt, isAdmin, deleteSchedule)
scheduleRoutes.put('/:scheduleId', validateJwt, isAdmin, updateSchedule)

export default scheduleRoutes;