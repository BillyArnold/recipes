import { Module } from '@nestjs/common';
import { MealplansService } from './mealplans.service';
import { MealplansController } from './mealplans.controller';
import { PrismaService } from 'src/prisma.service';

@Module({
  controllers: [MealplansController],
  providers: [MealplansService, PrismaService],
})
export class MealplansModule {}
