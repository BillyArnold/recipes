import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { PrismaService } from 'src/prisma.service';
import { CreateCategoryDto } from './dto/create-category.dto';
import { UpdateCategoryDto } from './dto/update-category.dto';

@Injectable()
export class CategoriesService {
  constructor(private prisma: PrismaService) {}

  create(data: Prisma.CategoryCreateInput) {
    return this.prisma.category.create({
      data,
    });
  }

  findAll() {
    return this.prisma.category.findMany({});
  }

  findOne(id: number) {
    return this.prisma.category.findUnique({
      where: {
        id,
      },
    });
  }

  update(id: number, data: Prisma.CategoryUpdateInput) {
    return this.prisma.category.update({
      data,
      where: {
        id,
      },
    });
  }

  remove(id: number) {
    return this.prisma.category.delete({
      where: {
        id,
      },
    });
  }
}
