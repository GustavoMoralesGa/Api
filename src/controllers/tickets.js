import { createTicket as createTicketModel } from "../models/tickets";

export const createTicket = async (req, res) => {
  try {
    const {
     userId,
     status,
     scheduleId,
    } = req.body
    const { ticketId } = req.params;
    const ticketPayload = {
      userId,
      status,
      scheduleId,
      ticketId
    }
    const ticketCreated = await createTicketModel(ticketPayload)
    res.send(ticketCreated)
  } catch (e) {
    res.status(500).send(e)
  }
}