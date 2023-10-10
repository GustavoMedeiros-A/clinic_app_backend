import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Prontuario } from 'src/model/entities/Prontuario';
import { Especialista } from 'src/model/entities/Especialista';
import { EspecialistaController } from './especialista.controller';
import { EspecialistaService } from './especialista.service';
import { EspecialistaRepository } from './especialista.repository';

@Module({
  imports: [TypeOrmModule.forFeature([Especialista])],
  controllers: [EspecialistaController],
  providers: [EspecialistaService, EspecialistaRepository],
})
export class EspecialistaModule {}
