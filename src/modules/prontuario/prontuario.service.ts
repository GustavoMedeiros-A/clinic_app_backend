import { Injectable, NotFoundException } from '@nestjs/common';
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

  async deleteById(id: number) {
    const prontuario = this.prontuarioRepository.findById(id)
    if(!prontuario) {
      throw new NotFoundException()
    }
    return await this.prontuarioRepository.deleteById(id)
  }
}
