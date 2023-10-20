import { EspecialistaClinicaService } from './especialista_clinica.service';
import { EspecialistaClinicaInputDTO } from './dtos/especialistaClinica.dto';
export declare class EspecialistaClinicaController {
    private readonly especialistaClinicaService;
    constructor(especialistaClinicaService: EspecialistaClinicaService);
    findAll(): Promise<import("../../model/entities/EspecialistaClinica").EspecialistaClinica[]>;
    create(especialistaClinicaDTO: EspecialistaClinicaInputDTO): Promise<import("../../model/entities/EspecialistaClinica").EspecialistaClinica>;
}
