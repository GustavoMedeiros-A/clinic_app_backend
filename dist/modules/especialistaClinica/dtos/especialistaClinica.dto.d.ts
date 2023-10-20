import { Clinica } from "src/model/entities/Clinica";
import { Especialista } from "src/model/entities/Especialista";
export declare class EspecialistaClinicaInputDTO {
    id: number;
    clinica: number;
    especialista: number;
}
export declare class EspecialistaClinicaOutputDTO {
    clinica: Clinica;
    especialista: Especialista;
}
