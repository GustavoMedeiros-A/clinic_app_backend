import { Injectable, NotFoundException } from '@nestjs/common';
import { ClinicaRepository } from './clinica.repository';
import { ClinicaDTO } from './dtos/clinica.dto';

@Injectable()
export class ClinicaService {
  constructor(private readonly clinicaRepository: ClinicaRepository) {}

  async findAll() {
    return await this.clinicaRepository.findAll();
  }

  async createClinica(clinicaDTO: ClinicaDTO): Promise<ClinicaDTO> {
    return await this.clinicaRepository.createClinica(clinicaDTO);
  }

  async deleteById(id: number) {
    const clinica = this.clinicaRepository.findById(id);
    if (!clinica) {
      throw new NotFoundException();
    }
    await this.clinicaRepository.deleteById(id);
    return `clinica ${(await clinica).nome} deleted`;
  }
}
