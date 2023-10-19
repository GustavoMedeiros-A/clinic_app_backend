import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { EspecialistaClinica } from 'src/model/entities/EspecialistaClinica';
import { EspecialistaClinicaController } from './especialista_clinica.controller';
import { EspecialistaClinicaService } from './especialista_clinica.service';
import { Especialista } from 'src/model/entities/Especialista';
import { Clinica } from 'src/model/entities/Clinica';

@Module({
  imports: [
    TypeOrmModule.forFeature([EspecialistaClinica, Especialista, Clinica]),
  ],
  controllers: [EspecialistaClinicaController],
  providers: [EspecialistaClinicaService],
})
export class EspecialistaClinicaModule {}
