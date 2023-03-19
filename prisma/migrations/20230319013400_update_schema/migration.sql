-- AlterEnum
ALTER TYPE "Status" ADD VALUE 'CREATED';
COMMIT;

-- AlterTable
ALTER TABLE "Schedule" ADD COLUMN     "packageId" INTEGER;

-- AlterTable
ALTER TABLE "Ticket" ALTER COLUMN "status" SET DEFAULT 'CREATED';

-- AddForeignKey
ALTER TABLE "Schedule" ADD CONSTRAINT "Schedule_packageId_fkey" FOREIGN KEY ("packageId") REFERENCES "Packages"("id") ON DELETE SET NULL ON UPDATE CASCADE;
