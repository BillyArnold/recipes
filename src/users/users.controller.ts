import { UsersService } from './users.service';
import {
  Controller,
  Post,
  Body,
  Delete,
  Param,
  Put,
  Get,
} from '@nestjs/common';
import { Prisma } from '@prisma/client';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.usersService.findById(+id);
  }

  @Post()
  create(@Body() data: Prisma.UserCreateInput) {
    return this.usersService.create(data);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() data: Prisma.UserUpdateInput) {
    return this.usersService.update(+id, data);
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
