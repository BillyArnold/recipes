import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { PrismaService } from 'src/prisma.service';
import { genSalt, hash } from 'bcryptjs';
import { JwtService } from '@nestjs/jwt';

// This should be a real class/interface representing a user entity
export type User = any;

@Injectable()
export class UsersService {
  constructor(
    private prisma: PrismaService,
    private jwtService: JwtService,
  ) {}

  async findOne(username: string): Promise<User | undefined> {
    return this.prisma.user.findUnique({
      where: {
        username,
      },
    });
  }

  update(id: number, data: Prisma.UserUpdateInput) {
    return this.prisma.user.update({
      data,
      where: {
        id,
      },
    });
  }

  async create(data: Prisma.UserCreateInput) {
    const salt = await genSalt(10);
    const hashedPassword = await hash(data.password, salt);
    data.password = hashedPassword;

    const user = await this.prisma.user.create({
      data,
    });

    const payload = { username: user.username, sub: user.id };

    const access_token = this.jwtService.sign(payload);

    return {
      access_token,
      ...user,
    };
  }

  addRecipe(data: Prisma.UserRecipeCreateInput) {
    return this.prisma.userRecipe.create({
      data,
    });
  }

  deleteRecipe(id: number) {
    return this.prisma.userRecipe.delete({
      where: {
        id,
      },
    });
  }
}
