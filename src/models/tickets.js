import { PrismaClient } from "@prisma/client";

const client = new PrismaClient();


export const createTicket = async (data) => {
  const ticketCreated = await client.ticket.create({
    data
  });
  return ticketCreated;
}