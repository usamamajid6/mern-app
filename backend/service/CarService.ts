import mongoose from "mongoose";
import { Car as CarInterface } from "../interface/Car";
import { Car as carSchema } from "../models/Car";
import { Request } from "express";

export const getAll = async (): Promise<CarInterface[]> => {
  try {
    return await carSchema.find();
  } catch (e: any) {
    throw new Error(e);
  }
};

export const getAllBasedOnFilters = async (req: Request): Promise<CarInterface[]> => {
  try {
    let filters = req.query;
    return await carSchema.find(filters);
  } catch (e: any) {
    throw new Error(e);
  }
};

export const saveCar = async (data: CarInterface): Promise<CarInterface> => {

  let car = new carSchema(data);
  try {
    return await car.save();
  } catch (e: any) {
    throw new Error(e);
  }
};
