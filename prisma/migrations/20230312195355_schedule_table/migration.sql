/*
  Warnings:

  - You are about to drop the column `climate` on the `Packages` table. All the data in the column will be lost.
  - You are about to drop the column `date` on the `Packages` table. All the data in the column will be lost.
  - You are about to drop the column `include` on the `Packages` table. All the data in the column will be lost.
  - You are about to drop the column `meetingPoint` on the `Packages` table. All the data in the column will be lost.
  - You are about to drop the column `notInclude` on the `Packages` table. All the data in the column will be lost.
  - You are about to drop the column `personValue` on the `Packages` table. All the data in the column will be lost.
  - You are about to drop the column `reschedule` on the `Packages` table. All the data in the column will be lost.
  - You are about to drop the column `restriccions` on the `Packages` table. All the data in the column will be lost.
  - You are about to drop the column `review` on the `Packages` table. All the data in the column will be lost.
  - You are about to drop the column `toWear` on the `Packages` table. All the data in the column will be lost.
  - You are about to drop the column `totalGroup` on the `Packages` table. All the data in the column will be lost.
  - Added the required column `conditions` to the `Packages` table without a default value. This is not possible if the table is not empty.
  - Added the required column `description` to the `Packages` table without a default value. This is not possible if the table is not empty.
  - Added the required column `gruopMin` to the `Packages` table without a default value. This is not possible if the table is not empty.
  - Added the required column `grupMax` to the `Packages` table without a default value. This is not possible if the table is not empty.
  - Added the required column `valuePerPerson` to the `Packages` table without a default value. This is not possible if the table is not empty.
  - Added the required column `packageValue` to the `Packages` table without a default value. This is not possible if the table is not empty.
  - Added the required column `duration` to the `Packages` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Packages" DROP COLUMN "climate",
DROP COLUMN "date",
DROP COLUMN "include",
DROP COLUMN "meetingPoint",
DROP COLUMN "notInclude",
DROP COLUMN "personValue",
DROP COLUMN "reschedule",
DROP COLUMN "restriccions",
DROP COLUMN "review",
DROP COLUMN "toWear",
DROP COLUMN "totalGroup",
ADD COLUMN     "conditions" TEXT NOT NULL,
ADD COLUMN     "description" TEXT NOT NULL,
ADD COLUMN     "gruopMin" INTEGER NOT NULL,
ADD COLUMN     "grupMax" INTEGER NOT NULL,
ADD COLUMN     "locationLat" DECIMAL(65,30),
ADD COLUMN     "locationLong" DECIMAL(65,30),
ADD COLUMN     "valuePerPerson" INTEGER NOT NULL,
DROP COLUMN "packageValue",
ADD COLUMN     "packageValue" INTEGER NOT NULL,
DROP COLUMN "duration",
ADD COLUMN     "duration" TIMESTAMP(3) NOT NULL;

-- CreateTable
CREATE TABLE "Schedule" (
    "id" SERIAL NOT NULL,
    "date" TIMESTAMP(3) NOT NULL,
    "locationLat" DECIMAL(65,30),
    "localtionLong" DECIMAL(65,30),
    "rescheduleable" BOOLEAN NOT NULL,
    "toWear" TEXT NOT NULL,
    "organizerId" INTEGER,

    CONSTRAINT "Schedule_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Schedule_organizerId_key" ON "Schedule"("organizerId");

-- AddForeignKey
ALTER TABLE "Schedule" ADD CONSTRAINT "Schedule_organizerId_fkey" FOREIGN KEY ("organizerId") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;
