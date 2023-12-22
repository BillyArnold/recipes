import { Injectable } from '@nestjs/common';
import { Prisma, Recipe } from '@prisma/client';
import { PrismaService } from 'src/prisma.service';
import { CreateRecipeIngredientDto } from './dto/create-recipe-ingredient.dto';

@Injectable()
export class RecipesService {
  constructor(private prisma: PrismaService) {}

  create(data: Prisma.RecipeCreateInput): Promise<Recipe> {
    return this.prisma.recipe.create({
      data,
    });
  }

  findAll() {
    return this.prisma.recipe.findMany({});
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

  //saverecipe for user

  //scrape bbc good food?

  //get recipe by ingredient
}
