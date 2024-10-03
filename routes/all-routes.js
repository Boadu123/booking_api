import { Router } from "express";
import {
  deleteBooking,
  getAllBookings,
  getOneBooking,
  postBooking,
  updateBooking,
} from "../controllers/booking_controller.js";

export const bookingRouter = Router();

bookingRouter.get("/bookings", getAllBookings);
bookingRouter.get("/book/:id", getOneBooking);
bookingRouter.post("/post", postBooking);
bookingRouter.delete("/delete", deleteBooking);
bookingRouter.patch("/update/:id", updateBooking);