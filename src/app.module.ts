import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthController } from './auth/auth.controller';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { ConfigModule } from '@nestjs/config';
import { RecipesModule } from './recipes/recipes.module';

@Module({
  imports: [AuthModule, UsersModule, ConfigModule.forRoot(), RecipesModule],
  controllers: [AppController, AuthController],
  providers: [AppService],
})
export class AppModule {}
