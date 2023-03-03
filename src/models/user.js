import { PrismaClient } from '@prisma/client';

const client = new PrismaClient();

export const getUserPassword = async (email) => {
  const userPass = await client.user.findUniqueOrThrow({
    where: {
      email,
    },
    select: {
      password: true,
    }
  });
  return userPass;
};


export const createUser = async (userData) => {
  const userCreated = await client.user.create({
    data: userData
  });
  return userCreated;
};

export const getAllUsers = async () => {
  return await client.user.findMany();
};

export const getUser = async (email) => {
  const user = await client.user.findUniqueOrThrow({
    where: {
      email,
    },
  })
  console.log(user)
  delete user['password'];
  return user
}

export const deleteUser = async (id) => {
  await client.user.delete({
    where: {
      id
    },
  });
  console.log('User deleted', id)
}