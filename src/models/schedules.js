import { PrismaClient } from "@prisma/client";

const client = new PrismaClient()

export const createSchedule = async (data) => {
  const scheduleCreated = await client.schedule.create({
    data,
  });
  return scheduleCreated;
}

export const getAllSchedule = async (Scheduledata) => {
  return await client.schedule.findMany({
    data: Scheduledata,
    orderBy: {
      id: "asc"
    }
  })
}

export const getScheduleById = async (id) => {
  const getSchedule = await client.schedule.findFirstOrThrow({
    id
  })
  return getSchedule
}

export const deleteSchedule = async (id) => {
  await client.schedule.delete({
    where: {
      id
    }
  })
  console.log('Schedule deleted id:', id)
}

export const updateSchedule = async (id, data) => {
  const updateScheduleData = await client.schedule.update({
    where: {
      id
    },
    data
  })
  return updateScheduleData;
}