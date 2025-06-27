import express, { Request, Response } from "express";
import mainRouter from "./routes/index.routes";

const app = express();

app.use("/api", mainRouter);

app.get("/", (_req: Request, res: Response) => {
  res.send("<h4>Server is working just fine</h4>");
});

export default app;
