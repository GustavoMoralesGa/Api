import Express from "express";
import {  createSchedule, 
          deleteSchedule, 
          getAllSchedule, 
          getScheduleById, 
          updateSchedule } from "../../controllers/schedules.js";
import { isAdmin } from "../../middleware/isAdmin.js";
import { validateJwt } from "../../middleware/validateJwt.js";

const scheduleRoutes = new Express();

scheduleRoutes.post('/:packageId/schedule', validateJwt, isAdmin, createSchedule)
// traer lista schedules 
// x ver error 500 (posible error con conexion con package)
scheduleRoutes.get('/schedules', validateJwt, isAdmin, getAllSchedule)
// traer 1 schedule por id
// x ver error 500 (posible error con conexion con package)
scheduleRoutes.get('/schedule/:schedulesId', getScheduleById)
// eliminar Schedules del listado
scheduleRoutes.delete('/schedule/:scheduleId')
// elimina en los packages ya registrados --OK 
scheduleRoutes.delete('/:packageId/schedule/:scheduleId',validateJwt, isAdmin, deleteSchedule)
// modifica en los packages ya registrados -- OK
scheduleRoutes.put('/:packageId/schedule/:scheduleId', validateJwt, isAdmin, updateSchedule)

export default scheduleRoutes;