import express, { Request, Response } from "express";
import cors from "cors";
import dotenv from "dotenv";
import mainRouter from "./routes/index.routes";

const app = express();
dotenv.config();

app.use(express.json());
app.use(cors());

app.use("/api", mainRouter);

app.get("/", (_req: Request, res: Response) => {
  res.send("<h4>Server is working just fine</h4>");
});

export default app;
