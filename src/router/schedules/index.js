import express from "express";
import {  createSchedule, 
          deleteSchedule, 
          getAllSchedule,
          updateSchedule } from "../../controllers/schedules.js";
import { isAdmin } from "../../middleware/isAdmin.js";
import { validateJwt } from "../../middleware/validateJwt.js";

const scheduleRoutes = express.Router({ mergeParams: true });

scheduleRoutes.post('/schedule', validateJwt, isAdmin, createSchedule)
scheduleRoutes.get('/schedules', validateJwt, getAllSchedule)
scheduleRoutes.delete('/schedule/:scheduleId',validateJwt, isAdmin, deleteSchedule)
scheduleRoutes.put('/schedule/:scheduleId', validateJwt, isAdmin, updateSchedule)

export default scheduleRoutes;