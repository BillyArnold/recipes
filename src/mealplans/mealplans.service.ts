import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { PrismaService } from 'src/prisma.service';
import { CreateMealplanDto } from './dto/create-mealplan.dto';
import { UpdateMealplanDto } from './dto/update-mealplan.dto';

@Injectable()
export class MealplansService {
  constructor(private prisma: PrismaService) {}

  create(data: Prisma.MealPlanCreateInput) {
    return this.prisma.mealPlan.create({
      data,
    });
  }

  findAll() {
    return this.prisma.mealPlan.findMany({});
  }

  findOne(id: number) {
    return this.prisma.mealPlan.findUnique({
      where: {
        id,
      },
    });
  }

  update(id: number, data: Prisma.MealPlanUpdateInput) {
    return this.prisma.mealPlan.update({
      data,
      where: {
        id,
      },
    });
  }

  remove(id: number) {
    return this.prisma.mealPlan.delete({
      where: {
        id,
      },
    });
  }
}