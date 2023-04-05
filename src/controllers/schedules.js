import {  createSchedule as createScheduleModel,
          getSchedulesByPackage as getScheduleByPackageIdModel,
          deleteSchedule as deleteScheduleModel,
          updateSchedule as updateScheduleModel,
          } from "../models/schedules.js";

export const createSchedule = async (req, res) => {
  try {
    const { 
      date,
      locationLat,
      locationLong,
      rescheduleable,
      toWear,
    } = req.body;
    const packageId = parseInt(req.params.packageId, 10)
    const schedulePayload = {
      date: new Date(date),
      locationLat,
      locationLong,
      rescheduleable,
      toWear,
      organizerId: req.user.id,
      packageId
    }
    const scheduleCreated = await createScheduleModel(schedulePayload)
    res.send(scheduleCreated)
  } catch (e) {
    console.log('Error un package Controller', e)
    res.status(500).send(e)
  }
}

export const getAllSchedule = async (req, res) => {
  try {
    const packageId = parseInt(req.params.packageId, 10)
    const allScheduleData = await getScheduleByPackageIdModel(packageId)
    res.status(200).send(allScheduleData)
  } catch (e) {
    console.log('Catched?', e)
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
