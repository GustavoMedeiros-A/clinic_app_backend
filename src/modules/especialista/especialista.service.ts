import { Injectable, NotFoundException } from '@nestjs/common';
import { EspecialistaRepository } from './especialista.repository';
import { EspecialistaDTO } from './dtos/especialista.dto';

@Injectable()
export class EspecialistaService {
  constructor(private readonly especialistaRepository: EspecialistaRepository) {}

  async findAll() {
    return await this.especialistaRepository.findAll();
  }

  async create(especialistaDto: EspecialistaDTO): Promise<EspecialistaDTO> {
    return await this.especialistaRepository.createEspecialista(especialistaDto);
  }

  async deleteById(id: number) {
    const especialista = this.especialistaRepository.findById(id)
    if(!especialista) {
      throw new NotFoundException()
    }
    return await this.especialistaRepository.deleteById(id)
  }
}
