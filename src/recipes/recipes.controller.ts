import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  Put,
  UseInterceptors,
  UploadedFile,
  Res,
} from '@nestjs/common';
import { RecipesService } from './recipes.service';
import { Prisma } from '@prisma/client';
import { FileInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import { extname } from 'path';

@Controller('recipes')
export class RecipesController {
  constructor(private readonly recipesService: RecipesService) {}

  @Post()
  create(@Body() data: Prisma.RecipeCreateInput) {
    return this.recipesService.create(data);
  }

  @Get()
  findAll(@Body() data: Prisma.RecipeFindManyArgs) {
    return this.recipesService.findAll(data);
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

  @Delete('/ingredient')
  deleteIngredient(@Param('id') id: string) {
    return this.recipesService.deleteRecipeIngredient(+id);
  }

  @Post('/category')
  addCategory(@Body() data: Prisma.RecipeCategoryCreateInput) {
    return this.recipesService.addCategory(data);
  }

  @Post('upload-image')
  @UseInterceptors(
    FileInterceptor('file', {
      storage: diskStorage({
        destination: './uploads',
        filename: (req, file, cb) => {
          const name = file.originalname.split('.')[0];
          const fileExtName = extname(file.originalname);
          cb(null, `${name}${fileExtName}`);
        },
      }),
    }),
  )
  uploadImage(@UploadedFile() file: Express.Multer.File) {
    if (file.path) {
      return file;
    }
  }

  @Get('/uploads/:imgpath')
  seeUploadedFile(@Param('imgpath') image, @Res() res) {
    return res.sendFile(image, { root: './uploads' });
  }

  @Delete('/category/:id')
  deleteCategory(@Param('id') id: string) {
    return this.recipesService.deleteRecipeCategory(+id);
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
