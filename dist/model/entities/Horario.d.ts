import { EspecialistaClinica } from './EspecialistaClinica';
import { DiaSemana } from './DiaSemana';
export declare class Horario {
    id: number;
    especialistaClinica: EspecialistaClinica;
    id_dia_semana: DiaSemana;
    hora_inicial: string;
    minuto_inicial: string;
    hora_final: string;
    minuto_final: string;
    quantidade_atendimentos: string;
}
