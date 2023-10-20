import { ClinicaTipoRepository } from './clinica_tipo.repository';
import { ClinicaTipoDTO } from './dtos/clinica_tipo.dto';
export declare class ClinicaTipoService {
    private readonly clinicaTipoRepository;
    constructor(clinicaTipoRepository: ClinicaTipoRepository);
    findAll(): Promise<import("../../model/entities/ClinicaTipo").TipoClinica[]>;
    createClinica(clinicaTipoDTO: ClinicaTipoDTO): Promise<ClinicaTipoDTO>;
    deleteById(id: number): Promise<string>;
}
