import { Router } from "express";
import adminRouter from "./admin.routes";

const mainRouter = Router();

mainRouter.use("/admin", adminRouter);

export default mainRouter;
