/*
  Warnings:

  - Changed the type of `duration` on the `Packages` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- AlterTable
ALTER TABLE "Packages" DROP COLUMN "duration",
ADD COLUMN     "duration" INTEGER NOT NULL;
