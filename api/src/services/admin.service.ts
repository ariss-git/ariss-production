import { prisma } from "../config/db"; // Import Prisma client instance

/**
 * Creates a new admin user if one with the same email, role 'admin', and approved status does not already exist.
 * @param name - Name of the admin
 * @param email - Email address of the admin
 * @param profile_picture - URL or path to the profile picture
 * @param role - Role of the user (expected to be 'admin')
 * @throws Error if an approved admin with the same email already exists
 * @returns The newly created admin record
 */
export const createAdmin = async (
  name: string,
  email: string,
  profile_picture: string,
  role: string
) => {
  const existingAdmin = await prisma.admin.findUnique({
    where: {
      email,
      role: "admin", // Ensures we're checking only for actual admin role
    },
  });

  if (existingAdmin) {
    throw new Error("Admin user already exists");
  }

  return await prisma.admin.create({
    data: {
      name,
      email,
      profile_picture,
      role,
      isApproved: true, // Only approve admins by default
    },
  });
};

/**
 * Retrieves all admin users.
 * @returns An array of admin user records
 */
export const getAllAdmin = async () => {
  return await prisma.admin.findMany();
};

/**
 * Fetches a single admin user by ID.
 * @param id - Unique identifier of the admin
 * @returns The admin user record if found, otherwise null
 */
export const getSingleAdmin = async (id: string) => {
  return await prisma.admin.findUnique({
    where: {
      id,
    },
  });
};

/**
 * Updates the profile picture of an approved admin user.
 * @param id - Unique identifier of the admin
 * @param profile_picture - New profile picture URL or path
 * @throws Error if no approved admin with the given ID exists
 * @returns The updated admin user record
 */
export const updateAdminProfilePicture = async (
  id: string,
  profile_picture: string
) => {
  const existingAdmin = await prisma.admin.update({
    where: {
      id,
      role: "admin",
      isApproved: true,
    },
    data: {
      profile_picture,
    },
  });

  if (!existingAdmin) {
    throw new Error("Admin user does not exist");
  }

  return existingAdmin;
};

/**
 * Deletes an admin user by ID.
 * @param id - Unique identifier of the admin
 * @returns The deleted admin user record
 */
export const deleteAdmin = async (id: string) => {
  return await prisma.admin.delete({
    where: {
      id,
    },
  });
};
