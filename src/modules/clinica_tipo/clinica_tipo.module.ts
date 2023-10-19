import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TipoClinica } from 'src/model/entities/ClinicaTipo';
import { ClinicaTipoController } from './clinica_tipo.controller';
import { ClinicaTipoService } from './clinica_tipo.service';
import { ClinicaTipoRepository } from './clinica_tipo.repository';

@Module({
  imports: [TypeOrmModule.forFeature([TipoClinica])],
  controllers: [ClinicaTipoController],
  providers: [ClinicaTipoService, ClinicaTipoRepository],
})
export class ClinicaTipoModule {}
