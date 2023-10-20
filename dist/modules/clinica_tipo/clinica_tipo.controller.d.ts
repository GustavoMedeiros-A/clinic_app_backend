import { ClinicaTipoService } from './clinica_tipo.service';
import { ClinicaTipoDTO } from './dtos/clinica_tipo.dto';
export declare class ClinicaTipoController {
    private readonly clinicaTipoService;
    constructor(clinicaTipoService: ClinicaTipoService);
    findAll(): Promise<import("../../model/entities/ClinicaTipo").TipoClinica[]>;
    createClinica(clinicaTipoDto: ClinicaTipoDTO): Promise<ClinicaTipoDTO>;
    deleteProntuario(id: number): Promise<string>;
}
