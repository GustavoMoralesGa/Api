/*
  Warnings:

  - You are about to drop the column `gruopMin` on the `Packages` table. All the data in the column will be lost.
  - You are about to drop the column `grupMax` on the `Packages` table. All the data in the column will be lost.
  - Added the required column `groupMax` to the `Packages` table without a default value. This is not possible if the table is not empty.
  - Added the required column `groupMin` to the `Packages` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Packages" DROP COLUMN "gruopMin",
DROP COLUMN "grupMax",
ADD COLUMN     "groupMax" INTEGER NOT NULL,
ADD COLUMN     "groupMin" INTEGER NOT NULL;
