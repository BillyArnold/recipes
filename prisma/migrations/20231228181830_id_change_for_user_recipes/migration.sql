/*
  Warnings:

  - The primary key for the `users_recipes` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - Added the required column `id` to the `users_recipes` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_users_recipes" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "userId" INTEGER NOT NULL,
    "recipeId" INTEGER NOT NULL,
    CONSTRAINT "users_recipes_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "users_recipes_recipeId_fkey" FOREIGN KEY ("recipeId") REFERENCES "recipes" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_users_recipes" ("recipeId", "userId") SELECT "recipeId", "userId" FROM "users_recipes";
DROP TABLE "users_recipes";
ALTER TABLE "new_users_recipes" RENAME TO "users_recipes";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
