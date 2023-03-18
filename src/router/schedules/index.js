import Express from "express";
import { createSchedule } from "../../controllers/schedules.js";
import { isAdmin } from "../../middleware/isAdmin.js";
import { validateJwt } from "../../middleware/validateJwt.js";

const scheduleRoutes = new Express();

scheduleRoutes.post('/schedule', validateJwt, isAdmin, createSchedule)


export default scheduleRoutes;