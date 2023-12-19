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

  //to do

  //saverecipe for user

  //scrape bbc good food?

  //get recipe by ingredient
}
