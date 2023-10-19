import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { TipoClinica } from 'src/model/entities/ClinicaTipo';
import { ClinicaTipoDTO } from './dtos/clinica_tipo.dto';

export class ClinicaTipoRepository {
  constructor(
    @InjectRepository(TipoClinica)
    private readonly clinicaTipoModel: Repository<TipoClinica>,
  ) {}

  async findById(id: number) {
    return await this.clinicaTipoModel.findOneBy({ id });
  }

  async findAll() {
    return await this.clinicaTipoModel.find();
  }

  async createClinica(clinicaTipoDto: ClinicaTipoDTO): Promise<TipoClinica> {
    const clinica = this.clinicaTipoModel.create(clinicaTipoDto);
    return await this.clinicaTipoModel.save(clinica);
  }

  async deleteById(id: number) {
    await this.clinicaTipoModel.delete({ id });
  }
}
