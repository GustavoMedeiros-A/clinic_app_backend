import { EspecialistaClinica } from './EspecialistaClinica';
export declare class Agenda {
    id: number;
    horario: string;
    data: Date;
    especialistaClinica: EspecialistaClinica;
    status: string;
    prontuario: string;
    bloqueado: string;
    data_modificacao: Date | null;
}
