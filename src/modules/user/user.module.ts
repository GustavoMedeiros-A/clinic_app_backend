import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Usuario } from 'src/model/entities/Usuario';
import { UserController } from './user.controller';
import { UserService } from './user.service';
import { UserRepository } from './user.repository';
import { JwtService } from '@nestjs/jwt/dist';

@Module({
  imports: [TypeOrmModule.forFeature([Usuario])],
  controllers: [UserController],
  providers: [UserService, UserRepository, JwtService],
  exports: [UserService],
})
export class UserModule {}
