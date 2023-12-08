/*
  Warnings:

  - You are about to drop the column `description` on the `Article` table. All the data in the column will be lost.
  - You are about to drop the column `url` on the `Article` table. All the data in the column will be lost.
  - You are about to drop the column `category_id` on the `History` table. All the data in the column will be lost.
  - You are about to drop the column `title` on the `History` table. All the data in the column will be lost.
  - You are about to drop the column `user_id` on the `History` table. All the data in the column will be lost.
  - You are about to drop the column `category_id` on the `Recommendation` table. All the data in the column will be lost.
  - You are about to drop the column `createdAt` on the `Recommendation` table. All the data in the column will be lost.
  - You are about to drop the column `deletedAt` on the `Recommendation` table. All the data in the column will be lost.
  - You are about to drop the column `updatedAt` on the `Recommendation` table. All the data in the column will be lost.
  - You are about to drop the column `profileUrl` on the `User` table. All the data in the column will be lost.
  - You are about to drop the `Category` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `articleUrl` to the `Article` table without a default value. This is not possible if the table is not empty.
  - Added the required column `confidenceThreshold` to the `History` table without a default value. This is not possible if the table is not empty.
  - Added the required column `typeId` to the `History` table without a default value. This is not possible if the table is not empty.
  - Added the required column `userId` to the `History` table without a default value. This is not possible if the table is not empty.
  - Added the required column `typeId` to the `Recommendation` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `History` DROP FOREIGN KEY `History_category_id_fkey`;

-- DropForeignKey
ALTER TABLE `History` DROP FOREIGN KEY `History_user_id_fkey`;

-- DropForeignKey
ALTER TABLE `Recommendation` DROP FOREIGN KEY `Recommendation_category_id_fkey`;

-- AlterTable
ALTER TABLE `Article` DROP COLUMN `description`,
    DROP COLUMN `url`,
    ADD COLUMN `articleUrl` VARCHAR(191) NOT NULL;

-- AlterTable
ALTER TABLE `History` DROP COLUMN `category_id`,
    DROP COLUMN `title`,
    DROP COLUMN `user_id`,
    ADD COLUMN `confidenceThreshold` DOUBLE NOT NULL,
    ADD COLUMN `typeId` INTEGER NOT NULL,
    ADD COLUMN `userId` INTEGER NOT NULL;

-- AlterTable
ALTER TABLE `Recommendation` DROP COLUMN `category_id`,
    DROP COLUMN `createdAt`,
    DROP COLUMN `deletedAt`,
    DROP COLUMN `updatedAt`,
    ADD COLUMN `typeId` INTEGER NOT NULL;

-- AlterTable
ALTER TABLE `User` DROP COLUMN `profileUrl`;

-- DropTable
DROP TABLE `Category`;

-- CreateTable
CREATE TABLE `Type` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `History` ADD CONSTRAINT `History_typeId_fkey` FOREIGN KEY (`typeId`) REFERENCES `Type`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `History` ADD CONSTRAINT `History_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `User`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Recommendation` ADD CONSTRAINT `Recommendation_typeId_fkey` FOREIGN KEY (`typeId`) REFERENCES `Type`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
