import express, { Request, Response } from "express";

const app = express();

app.get("/", (_req: Request, res: Response) => {
  res.send("<h4>Server is working just fine</h4>");
});

export default app;
