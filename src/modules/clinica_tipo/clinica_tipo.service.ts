import { Injectable, NotFoundException } from '@nestjs/common';
import { ClinicaDTO } from '../clinica/dtos/clinica.dto';
import { ClinicaTipoRepository } from './clinica_tipo.repository';
import { ClinicaTipoDTO } from './dtos/clinica_tipo.dto';

@Injectable()
export class ClinicaTipoService {
  constructor(private readonly clinicaTipoRepository: ClinicaTipoRepository) {}

  async findAll() {
    return await this.clinicaTipoRepository.findAll();
  }

  async createClinica(clinicaTipoDTO: ClinicaTipoDTO): Promise<ClinicaTipoDTO> {
    return await this.clinicaTipoRepository.createClinica(clinicaTipoDTO);
  }

  async deleteById(id: number) {
    const clinica = this.clinicaTipoRepository.findById(id);
    if (!clinica) {
      throw new NotFoundException();
    }
    await this.clinicaTipoRepository.deleteById(id);
    return `clinica ${(await clinica).nome} deleted`;
  }
}
