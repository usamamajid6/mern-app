import express, { Express, Request, Response } from "express";
import { Car as CarInterface } from "../interface/Car";
import { getAll, getAllBasedOnFilters, saveCar } from "../service/CarService";
const app: Express = express();
app.get("/car", async (req: Request, res: Response) => {
  try {
    const result = await getAll();
    res.json(result);
  } catch (e) {
    res.json(e).status(400);
  }
});

app.get("/car/filter", async (req: Request, res: Response) => {
  try {
  
    const result = await getAllBasedOnFilters(req);
    res.json({result});
  } catch (e) {
    res.json(e).status(400);
  }
});

app.post("/car", async (req: Request, res: Response) => {
  try {
    const result = await saveCar(req.body);
    res.json(result);
  } catch (e) {
    res.json(e).status(400);
  }
});

export default app;
