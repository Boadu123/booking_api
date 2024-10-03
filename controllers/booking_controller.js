import { booking } from "../models/booking-models.js";

export const getAllBookings = async (req, res, next) => {
  try {
    const getbooks = await booking.find();
    res.status(200).json(getbooks);
  } catch (error) {
    next(error);
  }
};

export const getOneBooking = async (req, res, next) => {
  res.status(200).json("This is one booking");
};

export const postBooking = async (req, res) => {
  try {
    const newBooking = await booking.create(req.body);
    // const bookings = await newBooking.save();

    res.status(200).json(newBooking);
  } catch (error) {
    next(error);
  }
};

export const deleteBooking = (req, res) => {
  res.status(200).json("You Deleted a Book");
};
export const updateBooking = (req, res) => {
  res.status(200).json("Changes made succesfully");
};
