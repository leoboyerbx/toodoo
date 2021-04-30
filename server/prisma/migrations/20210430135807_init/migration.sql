/*
  Warnings:

  - You are about to drop the column `completeBy` on the `Mission` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE `Mission` DROP FOREIGN KEY `Mission_ibfk_3`;

-- AlterTable
ALTER TABLE `Mission` DROP COLUMN `completeBy`;

-- CreateTable
CREATE TABLE `MissionCompletion` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `missionId` INTEGER NOT NULL,
    `completeBy` INTEGER,
    `completeDay` DATETIME(3),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `MissionCompletion` ADD FOREIGN KEY (`missionId`) REFERENCES `Mission`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `MissionCompletion` ADD FOREIGN KEY (`completeBy`) REFERENCES `Player`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;
