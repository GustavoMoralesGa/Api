/*
  Warnings:

  - Made the column `packageId` on table `Schedule` required. This step will fail if there are existing NULL values in that column.

*/
-- DropForeignKey
ALTER TABLE "Schedule" DROP CONSTRAINT "Schedule_packageId_fkey";

-- AlterTable
ALTER TABLE "Schedule" ALTER COLUMN "packageId" SET NOT NULL;

-- AddForeignKey
ALTER TABLE "Schedule" ADD CONSTRAINT "Schedule_packageId_fkey" FOREIGN KEY ("packageId") REFERENCES "Packages"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
