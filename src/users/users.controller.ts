import { UsersService } from './users.service';
import { Controller, Post, Body, Delete, Param } from '@nestjs/common';
import { Prisma } from '@prisma/client';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  create(@Body() data: Prisma.UserCreateInput) {
    return this.usersService.create(data);
  }

  @Post('recipe')
  addRecipe(@Body() data: Prisma.UserRecipeCreateInput) {
    return this.usersService.addRecipe(data);
  }

  @Delete('recipe')
  deleteRecipe(@Param('id') id: number) {
    return this.usersService.deleteRecipe(+id);
  }
}
