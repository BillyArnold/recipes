-- AlterTable
ALTER TABLE "categories" ADD COLUMN "recipeId" INTEGER;

-- CreateTable
CREATE TABLE "recipe_categories" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "recipeId" INTEGER NOT NULL,
    "categoryId" INTEGER NOT NULL,
    CONSTRAINT "recipe_categories_recipeId_fkey" FOREIGN KEY ("recipeId") REFERENCES "recipes" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "recipe_categories_categoryId_fkey" FOREIGN KEY ("categoryId") REFERENCES "categories" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
