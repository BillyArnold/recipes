import { Injectable } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import { JwtService } from '@nestjs/jwt';
import { compare } from 'bcryptjs';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService,
  ) {}

  async validateUser(username: string, pass: string): Promise<any> {
    const user = await this.usersService.findOne(username);
    if (user) {
      const isAuthorized = await compare(pass, user.password);
      if (isAuthorized) {
        const { ...result } = user;
        return result;
      } else {
        throw new Error('User not authorized');
      }
    } else {
      throw new Error('User not found');
    }
  }

  async login(user: any) {
    const payload = { username: user.username, sub: user.id };
    return {
      access_token: this.jwtService.sign(payload),
      id: user.id,
      mealPlans: user.mealPlans,
    };
  }
}
