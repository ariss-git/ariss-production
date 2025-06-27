import { Request, Response } from "express";
import * as adminServices from "../services/admin.service";

/**
 * @description Handles the creation of a new admin.
 * @route POST /admin
 * @access Private (based on implementation)
 */
export const createAdmin = async (req: Request, res: Response) => {
  const { name, email, profile_picture, role } = req.body;

  try {
    const admin = await adminServices.createAdmin(
      name,
      email,
      profile_picture,
      role
    );

    res.status(201).json({ message: "Admin created", data: admin });
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
};

/**
 * @description Retrieves all admin users.
 * @route GET /admin
 * @access Private
 */
export const getAllAdmin = async (_req: Request, res: Response) => {
  try {
    const admins = await adminServices.getAllAdmin();
    res.status(200).json({ total: admins.length, data: admins });
  } catch (error: any) {
    res.status(400).json({ message: error.message });
  }
};

/**
 * @description Retrieves a single admin by ID.
 * @route GET /admin/:id
 * @access Private
 */
export const getSingleAdmin = async (req: Request, res: Response) => {
  const { id } = req.params;

  if (!id) {
    res.status(404).json({ message: "ID not found" });
  }

  try {
    const admin = await adminServices.getSingleAdmin(id);
    res.status(200).json({ data: admin });
  } catch (error: any) {
    res.status(400).json({ message: error.message });
  }
};

/**
 * @description Updates the profile picture of a specific admin.
 * @route PUT /admin/:id/profile-picture
 * @access Private
 */
export const updateAdminProfilePicture = async (
  req: Request,
  res: Response
) => {
  const { id } = req.params;
  const { profile_picture } = req.body;

  if (!id) {
    res.status(404).json({ message: "ID not found" });
  }

  try {
    const admin = await adminServices.updateAdminProfilePicture(
      id,
      profile_picture
    );
    res.status(200).json({ message: "Admin updated", data: admin });
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
};

/**
 * @description Deletes an admin by ID.
 * @route DELETE /admin/:id
 * @access Private
 */
export const deleteAdmin = async (req: Request, res: Response) => {
  const { id } = req.params;

  if (!id) {
    res.status(404).json({ message: "ID not found" });
  }

  try {
    const admin = await adminServices.deleteAdmin(id);
    res.status(200).json({ message: "Admin deleted", data: admin });
  } catch (error: any) {
    res.status(400).json({ message: error.message });
  }
};
