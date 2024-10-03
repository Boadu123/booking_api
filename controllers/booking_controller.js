import { booking } from "../models/booking-models.js";

export const getAllBookings = (req, res, next) => {
  try {
    const getbooks = new booking.find();
    res.status(200).json(getbooks);
  } catch (error) {
    next(error);
  }
};



export const getOneBooking = async (req, res, next) => {
  try {
    await booking.create(req.body)
    res.status(200).json("Book was created");
  } catch (error) {
    next(error)
  }
};

export const postBooking = async (req, res, next) => {


  res.status(200).json(bookings);
};

export const deleteBooking = (req, res, next) => {
  res.status(200).json("You Deleted a Book");
};
export const updateBooking = (req, res, next) => {
  res.status(200).json("Changes made succesfully");
};
