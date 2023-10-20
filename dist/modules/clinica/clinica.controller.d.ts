import { ClinicaService } from './clinica.service';
import { ClinicaDTO } from './dtos/clinica.dto';
export declare class ClinicaController {
    private readonly clinicaService;
    constructor(clinicaService: ClinicaService);
    findAll(): Promise<import("../../model/entities/Clinica").Clinica[]>;
    createClinica(clinicaDto: ClinicaDTO): Promise<ClinicaDTO>;
    deleteProntuario(id: number): Promise<string>;
}
