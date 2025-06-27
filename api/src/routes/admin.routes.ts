import { Router } from "express";
import * as adminControllers from "../controllers/admin.controller";

const adminRouter = Router();

adminRouter.post("/", adminControllers.createAdmin);
adminRouter.get("/", adminControllers.getAllAdmin);
adminRouter.get("/:id", adminControllers.getSingleAdmin);
adminRouter.put(
  "/:id/profile-picture",
  adminControllers.updateAdminProfilePicture
);
adminRouter.delete("/:id", adminControllers.deleteAdmin);

export default adminRouter;
