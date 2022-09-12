/*
  Warnings:

  - A unique constraint covering the columns `[userId,title]` on the table `cards` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[id,userId]` on the table `cards` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "cards_userId_title_key" ON "cards"("userId", "title");

-- CreateIndex
CREATE UNIQUE INDEX "cards_id_userId_key" ON "cards"("id", "userId");
