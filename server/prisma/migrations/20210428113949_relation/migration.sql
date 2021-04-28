-- DropIndex
DROP INDEX `Player.teamId_unique` ON `Player`;

-- AddForeignKey
ALTER TABLE `Player` ADD FOREIGN KEY (`teamId`) REFERENCES `Team`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
