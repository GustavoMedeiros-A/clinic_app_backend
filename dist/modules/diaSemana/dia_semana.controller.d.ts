import { DiaSemanaService } from "./dia_semana.service";
import { DiaSemanaDTO } from "./dtos/dia_semana.dto";
export declare class DiaSemanaController {
    private readonly diaSemanaService;
    constructor(diaSemanaService: DiaSemanaService);
    findAll(): Promise<import("../../model/entities/DiaSemana").DiaSemana[]>;
    create(diaSemana: DiaSemanaDTO): Promise<DiaSemanaDTO>;
}
