import { PrismaClient} from "@prisma/client";

const client = new PrismaClient();

export const createPackage = async (packageData) => {
  const packageCreated = await client.packages.create({
    data: packageData
  });
  return packageCreated
}
