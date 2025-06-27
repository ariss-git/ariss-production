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
