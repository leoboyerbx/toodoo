-- AlterTable
ALTER TABLE `Mission` ADD COLUMN     `completeBy` INTEGER;

-- AddForeignKey
ALTER TABLE `Mission` ADD FOREIGN KEY (`completeBy`) REFERENCES `Player`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;
