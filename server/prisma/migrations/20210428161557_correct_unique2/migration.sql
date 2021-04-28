/*
  Warnings:

  - You are about to drop the column `teamId` on the `Mission` table. All the data in the column will be lost.
  - You are about to drop the column `assignTo` on the `Mission` table. All the data in the column will be lost.
  - Added the required column `gameId` to the `Mission` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `Mission` DROP FOREIGN KEY `Mission_ibfk_2`;

-- DropForeignKey
ALTER TABLE `Mission` DROP FOREIGN KEY `Mission_ibfk_1`;

-- AlterTable
ALTER TABLE `Mission` DROP COLUMN `teamId`,
    DROP COLUMN `assignTo`,
    ADD COLUMN     `gameId` INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE `Mission` ADD FOREIGN KEY (`gameId`) REFERENCES `Game`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
