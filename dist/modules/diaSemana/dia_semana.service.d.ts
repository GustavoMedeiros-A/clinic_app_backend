import { DiaSemanaRepository } from "./dia_semana.repository";
import { DiaSemanaDTO } from "./dtos/dia_semana.dto";
export declare class DiaSemanaService {
    private readonly diaSemanaRepository;
    constructor(diaSemanaRepository: DiaSemanaRepository);
    findAll(): Promise<import("../../model/entities/DiaSemana").DiaSemana[]>;
    create(diaSemana: DiaSemanaDTO): Promise<DiaSemanaDTO>;
}
