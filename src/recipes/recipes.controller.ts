import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Req,
  Put,
} from '@nestjs/common';
import { RecipesService } from './recipes.service';
import { CreateRecipeIngredientDto } from './dto/create-recipe-ingredient.dto';
import { UpdateRecipeDto } from './dto/update-recipe.dto';
import { Prisma } from '@prisma/client';
import { ApiBody } from '@nestjs/swagger';

@Controller('recipes')
export class RecipesController {
  constructor(private readonly recipesService: RecipesService) {}

  @Post()
  create(@Body() data: Prisma.RecipeCreateInput) {
    return this.recipesService.create(data);
  }

  @Get()
  findAll() {
    return this.recipesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.recipesService.findOne(+id);
  }

  @Post('/ingredient')
  addIngredient(@Body() data: Prisma.RecipeIngredientCreateInput) {
    return this.recipesService.addIngredient(data);
  }

  @Put('/ingredient')
  updateIngredient(
    @Param('id') id: string,
    @Body() data: Prisma.RecipeIngredientUpdateInput,
  ) {
    return this.recipesService.updateIngredient(+id, data);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() data: Prisma.RecipeUpdateInput) {
    return this.recipesService.update(+id, data);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.recipesService.remove(+id);
  }
}
