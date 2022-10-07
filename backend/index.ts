import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";
import * as mongoose from "mongoose";
import cors from "cors";
import CarController from "./controller/CarController";
dotenv.config();

const app: Express = express();
const port = process.env.PORT;
const url = "mongodb://localhost:27017/carDB";

app.use(cors());
app.use(express.json());
app.use(CarController);

mongoose.connect(url, () => {
  console.log("Connected To Database!");
});

app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});
