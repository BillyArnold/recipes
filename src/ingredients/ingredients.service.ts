import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { PrismaService } from 'src/prisma.service';
import { CreateIngredientDto } from './dto/create-ingredient.dto';
import { UpdateIngredientDto } from './dto/update-ingredient.dto';

@Injectable()
export class IngredientsService {
  constructor(private prisma: PrismaService) {}

  create(data: Prisma.IngredientCreateInput) {
    return this.prisma.ingredient.create({
      data,
    });
  }

  findAll() {
    return this.prisma.ingredient.findMany({});
  }

  findOne(id: number) {
    return this.prisma.ingredient.findUnique({
      where: {
        id,
      },
    });
  }

  update(id: number, data: Prisma.IngredientUpdateInput) {
    return this.prisma.ingredient.update({
      data,
      where: {
        id,
      },
    });
  }

  remove(id: number) {
    return this.prisma.ingredient.delete({
      where: {
        id,
      },
    });
  }
}
