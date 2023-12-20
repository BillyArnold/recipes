import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Put,
} from '@nestjs/common';
import { MealplansService } from './mealplans.service';
import { Prisma } from '@prisma/client';

@Controller('mealplans')
export class MealplansController {
  constructor(private readonly mealplansService: MealplansService) {}

  @Post()
  create(@Body() data: Prisma.MealPlanCreateInput) {
    return this.mealplansService.create(data);
  }

  @Get()
  findAll() {
    return this.mealplansService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.mealplansService.findOne(+id);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() data: Prisma.MealPlanUpdateInput) {
    return this.mealplansService.update(+id, data);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.mealplansService.remove(+id);
  }
}
