import {  createSchedule as createScheduleModel,
          getAllSchedule as getAllScheduleModel,
          deleteSchedule as deleteScheduleModel,
          updateSchedule as updateScheduleModel } from "../models/schedules.js";

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

export const getAllSchedule = async (_req, res) => {
  try {
    const allScheduleData = await getAllScheduleModel()
    res.status(200).send(allScheduleData)
  } catch (e) {
    res.status(500).send(e)
  }
}

export const deleteSchedule = async (req, res) => {
  try {
    const scheduleId = parseInt(req.params.scheduleId, 10)
    await deleteScheduleModel(scheduleId)
    res.status(204).send();
  } catch (e) {
    res.status(500).send(e)
  } 
}

export const updateSchedule = async (req, res) => {
  try {
    const scheduleId = parseInt(req.params.scheduleId, 10);
    const data = req.body;
    const updateSchedule = await updateScheduleModel(scheduleId, data)
    res.status(201).send(updateSchedule)
  } catch (e) {
    res.status(500).send(e)
  }
}
