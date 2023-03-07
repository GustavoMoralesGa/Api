-- CreateTable
CREATE TABLE "Packages" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "review" TEXT NOT NULL,
    "totalGroup" TEXT,
    "packageValue" TEXT,
    "personValue" TEXT,
    "date" DATE NOT NULL,
    "duration" TEXT,
    "include" TEXT,
    "notInclude" TEXT,
    "meetingPoint" TEXT NOT NULL,
    "toWear" TEXT NOT NULL,
    "restriccions" TEXT NOT NULL,
    "climate" TEXT NOT NULL,
    "reschedule" TEXT NOT NULL,

    CONSTRAINT "Packages_pkey" PRIMARY KEY ("id")
);
