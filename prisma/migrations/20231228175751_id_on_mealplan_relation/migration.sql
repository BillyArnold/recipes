/*
  Warnings:

  - The primary key for the `meal_plan_recipes` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - Added the required column `id` to the `meal_plan_recipes` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_meal_plan_recipes" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "mealPlanId" INTEGER NOT NULL,
    "recipeId" INTEGER NOT NULL,
    "day" INTEGER NOT NULL,
    CONSTRAINT "meal_plan_recipes_mealPlanId_fkey" FOREIGN KEY ("mealPlanId") REFERENCES "meal_plans" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "meal_plan_recipes_recipeId_fkey" FOREIGN KEY ("recipeId") REFERENCES "recipes" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_meal_plan_recipes" ("day", "mealPlanId", "recipeId") SELECT "day", "mealPlanId", "recipeId" FROM "meal_plan_recipes";
DROP TABLE "meal_plan_recipes";
ALTER TABLE "new_meal_plan_recipes" RENAME TO "meal_plan_recipes";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
