import mongoose from "mongoose";
import { Car as CarInterface } from "../interface/Car";
const carSchema = new mongoose.Schema<CarInterface>(
  {
    id: { type: mongoose.Schema.Types.ObjectId, required: false },
    name: {
      type: String,
      required: true,
    },
    manafactureName: {
      type: String,
      required: true,
    },
    modelYear: {
      type: Number,
      required: true,
    },
    transmission: {
      type: String,
      required: true,
    },
    color: {
      type: String,
      required: true,
    },
    bodyType: {
      type: String,
      required: true,
    },
    engineCapacity: {
      type: Number,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const Car = mongoose.model("Car", carSchema);

export { Car };
