import { prisma } from "../config/db";

export const createAdmin = async (
  name: string,
  email: string,
  profile_picture: string,
  role: string
) => {
  const existingAdmin = await prisma.admin.findUnique({
    where: {
      email,
      role: "admin",
      isApproved: true,
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
    },
  });
};

export const getAllAdmin = async () => {
  return await prisma.admin.findMany();
};

export const getSingleAdmin = async (id: string) => {
  return await prisma.admin.findUnique({
    where: {
      id,
    },
  });
};

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
    throw new Error("Admin user do not exist");
  }

  return existingAdmin;
};

export const deleteAdmin = async (id: string) => {
  return await prisma.admin.delete({
    where: {
      id,
    },
  });
};
