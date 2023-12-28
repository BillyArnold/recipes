import { Injectable } from '@nestjs/common';
import { Prisma, Recipe } from '@prisma/client';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class RecipesService {
  constructor(private prisma: PrismaService) {}

  create(data: Prisma.RecipeCreateInput): Promise<Recipe> {
    return this.prisma.recipe.create({
      data,
    });
  }

  findAll(data: Prisma.RecipeFindManyArgs) {
    return this.prisma.recipe.findMany(data);
  }

  findOne(id: number) {
    return this.prisma.recipe.findUnique({
      where: {
        id,
      },
    });
  }

  update(id: number, data: Prisma.RecipeUpdateInput) {
    return this.prisma.recipe.update({
      data,
      where: {
        id,
      },
    });
  }

  remove(id: number) {
    return this.prisma.recipe.delete({
      where: {
        id,
      },
    });
  }

  addIngredient(data: Prisma.RecipeIngredientCreateInput) {
    return this.prisma.recipeIngredient.create({
      data,
    });
  }

  updateIngredient(id: number, data: Prisma.RecipeIngredientUpdateInput) {
    return this.prisma.recipeIngredient.update({
      data,
      where: {
        id,
      },
    });
  }

  deleteRecipeIngredient(id: number) {
    return this.prisma.recipeIngredient.delete({
      where: {
        id,
      },
    });
  }

  addCategory(data: Prisma.RecipeCategoryCreateInput) {
    return this.prisma.recipeCategory.create({
      data,
    });
  }

  deleteRecipeCategory(id: number) {
    return this.prisma.recipeCategory.delete({
      where: {
        id,
      },
    });
  }
}
