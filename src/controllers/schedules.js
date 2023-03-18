import { createSchedule as createScheduleModel } from "../models/schedules.js";

export const createSchedule = async (req, res) => {
  try {
    const { 
      date,
      locationLat,
      locationLong,
      rescheduleable,
      toWear,
      organizerId,
    } = req.body; 
    const schedulePayload = {
      date: new Date(date),
      locationLat,
      locationLong,
      rescheduleable,
      toWear,
      organizerId,
    }
    const scheduleCreated = await createScheduleModel(schedulePayload)
    res.send(scheduleCreated)
  } catch (e) {
    console.log('Error un package Controller', e)
    res.status(500).send(e)
  }
}

