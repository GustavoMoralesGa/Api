-- AlterTable
ALTER TABLE "Packages" ADD COLUMN     "active" BOOLEAN DEFAULT false;

-- AlterTable
ALTER TABLE "Schedule" ADD COLUMN     "active" BOOLEAN DEFAULT false;
