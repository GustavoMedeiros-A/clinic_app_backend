import { ClinicaRepository } from './clinica.repository';
import { ClinicaDTO } from './dtos/clinica.dto';
export declare class ClinicaService {
    private readonly clinicaRepository;
    constructor(clinicaRepository: ClinicaRepository);
    findAll(): Promise<import("../../model/entities/Clinica").Clinica[]>;
    createClinica(clinicaDTO: ClinicaDTO): Promise<ClinicaDTO>;
    deleteById(id: number): Promise<string>;
}
