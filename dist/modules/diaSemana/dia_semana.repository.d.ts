import { DiaSemana } from "src/model/entities/DiaSemana";
import { Repository } from "typeorm";
import { DiaSemanaDTO } from "./dtos/dia_semana.dto";
export declare class DiaSemanaRepository {
    private readonly diaSemanaModel;
    constructor(diaSemanaModel: Repository<DiaSemana>);
    findAll(): Promise<DiaSemana[]>;
    findByName(name: string): Promise<DiaSemana | undefined>;
    create(diaSemana: DiaSemanaDTO): Promise<DiaSemana>;
}
