import { PrismaClient } from "@prisma/client";

const client = new PrismaClient()

export const createSchedule = async (data) => {
  const scheduleCreated = await client.schedule.create({
    data,
  });
  return scheduleCreated;
}

export const getSchedulesByPackage = async (packageId) => {
  const schedules = await client.packages.findUniqueOrThrow({
    where: {
      id: packageId,
    }
  }).schedules()
  // const schedules = await client.schedule.findMany({
  //   where: {
  //     packageId,
  //   },
  // })
  return schedules
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