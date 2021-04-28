-- AlterTable
ALTER TABLE `Mission` ADD COLUMN     `assignTo` INTEGER;

-- AddForeignKey
ALTER TABLE `Mission` ADD FOREIGN KEY (`assignTo`) REFERENCES `Player`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;
