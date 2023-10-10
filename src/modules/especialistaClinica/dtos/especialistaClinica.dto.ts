import { Clinica } from "src/model/entities/Clinica";
import { Especialista } from "src/model/entities/Especialista";

export class EspecialistaClinicaInputDTO {
    id: number;
    clinica: number;
    especialista: number;
}
export class EspecialistaClinicaOutputDTO {
    clinica: Clinica;
    especialista: Especialista;
  }