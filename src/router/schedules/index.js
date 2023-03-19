import Express from "express";
import { createSchedule, deleteSchedule, getAllSchedule, updateSchedule } from "../../controllers/schedules.js";
import { isAdmin } from "../../middleware/isAdmin.js";
import { validateJwt } from "../../middleware/validateJwt.js";

const scheduleRoutes = new Express();

scheduleRoutes.post('/schedule', validateJwt, isAdmin, createSchedule)
scheduleRoutes.get('/schedule', validateJwt, isAdmin, getAllSchedule)
scheduleRoutes.delete('/:scheduleId',validateJwt, isAdmin, deleteSchedule)
scheduleRoutes.put('/:scheduleId', validateJwt, isAdmin, updateSchedule)

export default scheduleRoutes;