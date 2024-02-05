-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_meal_plan_recipes" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "mealPlanId" INTEGER NOT NULL,
    "recipeId" INTEGER NOT NULL,
    "day" TEXT NOT NULL,
    CONSTRAINT "meal_plan_recipes_mealPlanId_fkey" FOREIGN KEY ("mealPlanId") REFERENCES "meal_plans" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "meal_plan_recipes_recipeId_fkey" FOREIGN KEY ("recipeId") REFERENCES "recipes" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_meal_plan_recipes" ("day", "id", "mealPlanId", "recipeId") SELECT "day", "id", "mealPlanId", "recipeId" FROM "meal_plan_recipes";
DROP TABLE "meal_plan_recipes";
ALTER TABLE "new_meal_plan_recipes" RENAME TO "meal_plan_recipes";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
