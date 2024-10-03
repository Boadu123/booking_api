import express from "express";
import { bookingRouter } from "./routes/all-routes.js";
import mongoose from "mongoose";
import "dotenv/config";

const app = express();

app.use(express.json());
app.use(bookingRouter); 

const PORT = 3000;

await mongoose.connect(process.env.MONGO_URI);

app.listen(PORT, () => {
  console.log(`Port is working ${PORT}`);
});
