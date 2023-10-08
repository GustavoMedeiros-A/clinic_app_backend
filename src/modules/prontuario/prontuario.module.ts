import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Prontuario } from 'src/model/entities/Prontuario';
import { ProntuarioController } from './prontuario.controller';
import { ProntuarioService } from './prontuario.service';
import { ProntuarioRepository } from './prontuario.repository';

@Module({
  imports: [TypeOrmModule.forFeature([Prontuario])],
  controllers: [ProntuarioController],
  providers: [ProntuarioService, ProntuarioRepository],
})
export class ProntuarioModule {}
