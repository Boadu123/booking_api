import { booking } from "../models/booking-models.js";

export const getAllBookings = async (req, res) => {
  const getbooks = await new booking.find();
  res.status(200).json(getbooks);
};

export const getOneBooking = async (req, res) => {
  res.status(200).json("This is one booking");
};

export const postBooking = async (req, res) => {
  const newBooking = booking(req.body);

  const bookings = await newBooking.save();

  res.status(200).json(bookings);
};

export const deleteBooking = (req, res) => {
  res.status(200).json("You Deleted a Book");
};
export const updateBooking = (req, res) => {
  res.status(200).json("Changes made succesfully");
};
