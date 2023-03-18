import { PrismaClient } from "@prisma/client";

const client = new PrismaClient()

export const createSchedule = async (data) => {
  const scheduleCreated = await client.schedule.create({
    data,
  });
  return scheduleCreated;
}