import { Router } from "express";
import {
  deleteBooking,
  getAllBookings,
  getOneBooking,
  postBooking,
  updateBooking,
} from "../controllers/booking_controller.js";

export const bookingRouter = Router();

bookingRouter.get("/users/bookings", getAllBookings);
bookingRouter.get("/users/book/:id", getOneBooking);
bookingRouter.post("/users/post", postBooking);
bookingRouter.delete("/users/delete", deleteBooking);
bookingRouter.patch("/users/update", updateBooking);
