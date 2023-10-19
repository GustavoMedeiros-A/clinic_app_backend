import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { EspecialistaClinica } from 'src/model/entities/EspecialistaClinica';
import { Horario } from 'src/model/entities/Horario';
import { HorarioController } from './horario.controller';
import { HorarioService } from './horario.service';
import { DiaSemana } from 'src/model/entities/DiaSemana';

@Module({
  imports: [
    TypeOrmModule.forFeature([EspecialistaClinica, Horario, DiaSemana]),
  ],
  controllers: [HorarioController],
  providers: [HorarioService],
})
export class HorarioModule {}
