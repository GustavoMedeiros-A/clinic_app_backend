export interface ClinicaDTO {
    id: number;
    nome: string;
    codigo: number;
    bloqueado: string;
    localizacao: string;
    ramal: string;
    responsavel: number | null;
    obs: string | null;
    fieldTipoValue: string;
}
