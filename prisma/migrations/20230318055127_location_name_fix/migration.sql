/*
  Warnings:

  - You are about to drop the column `localtionLong` on the `Schedule` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Schedule" DROP COLUMN "localtionLong",
ADD COLUMN     "locationLong" DECIMAL(65,30);
