import {  createSchedule as createScheduleModel,
          getAllSchedule as getAllScheduleModel,
          deleteSchedule as deleteScheduleModel,
          updateSchedule as updateScheduleModel,
          getScheduleById as getScheduleByIdModel } from "../models/schedules.js";

export const createSchedule = async (req, res) => {
  try {
    const { 
      date,
      locationLat,
      locationLong,
      rescheduleable,
      toWear,
    } = req.body;
    const packageId = parseInt(req.params.packageId);
    const schedulePayload = {
      date: new Date(date),
      locationLat,
      locationLong,
      rescheduleable,
      toWear,
      organizerId: req.user.id,
      packageId,
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
    console.log(allScheduleData)
  } catch (e) {
    res.status(500).send(e)
  }
}

export const getScheduleById = async (req, res) => {
  try {
    const scheduleId = parseInt(req.params.scheduleId, 10);
    const scheduleData = await getScheduleByIdModel(scheduleId)
    res.status(200).send(scheduleData)
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
