import { DiaSemana } from 'src/model/entities/DiaSemana';
import { EspecialistaClinica } from 'src/model/entities/EspecialistaClinica';
export declare class HorarioInputDTO {
    id: number;
    especialistaClinica: number;
    id_dia_semana: number;
    hora_inicial: string;
    minuto_inicial: string;
    hora_final: string;
    minuto_final: string;
    quantidade_atendimentos: string;
}
export declare class HorarioOutputDTO {
    id: number;
    especialistaClinica: EspecialistaClinica;
    id_dia_semana: DiaSemana;
    hora_inicial: string;
    minuto_inicial: string;
    hora_final: string;
    minuto_final: string;
    quantidade_atendimentos: string;
}
