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
  return await client.user.findMany({
    where: {
      role: 'USER'
    },
    select: {
      id: true,
      name: true,
      lastName: true,
      email: true,
      NationalId: true
    }
  });
};

export const getAllUsersData = async () => {
  return await client.user.findMany({
    select: {
      id: true,
      name: true,
      lastName: true,
      email: true,
      NationalId: true,
      role: true
    },
    orderBy: {
      role: "desc"
    }
  })
}

export const getUser = async (email) => {
  const user = await client.user.findUniqueOrThrow({
    where: {
      email,
    },
  })
  delete user['password'];
  return user
}

export const deleteUser = async (id) => {
  await client.user.delete({
    where: {
      id
    },
  });
  console.log('User deleted id:', id)
}

export const updateUser = async (id, data) => {
  const updatedUserData = await client.user.update({
    where: {
      id
    }, 
    data,
    select: {
      name: true,
      lastName: true,
    }
  })
  return updatedUserData;
}