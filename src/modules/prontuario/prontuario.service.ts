import { Injectable } from '@nestjs/common';
import { ProntuarioRepository } from './prontuario.repository';
import { ProntuarioDTO } from './dtos/Prontuario.dto';

@Injectable()
export class ProntuarioService {
  constructor(private readonly prontuarioRepository: ProntuarioRepository) {}

  async findAll() {
    return await this.prontuarioRepository.findAll();
  }

  async createProntuario(prontuarioDto: ProntuarioDTO): Promise<ProntuarioDTO> {
    return await this.prontuarioRepository.createProntuario(prontuarioDto);
  }
}
