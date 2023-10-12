import { InjectRepository } from "@nestjs/typeorm";
import { DiaSemana } from "src/model/entities/DiaSemana";
import { Repository } from "typeorm";
import { DiaSemanaDTO } from "./dtos/dia_semana.dto";
import { Injectable } from "@nestjs/common";

@Injectable()
export class DiaSemanaRepository {
    constructor(@InjectRepository(DiaSemana) private readonly diaSemanaModel: Repository<DiaSemana>) {}

    async findAll() {
        return await this.diaSemanaModel.find()
    }

    async findByName(name: string): Promise<DiaSemana | undefined> {
        return await this.diaSemanaModel.findOneBy({ dia_semana: name });
      }
    

    async create(diaSemana: DiaSemanaDTO): Promise<DiaSemana> {
        const dia_semana = this.diaSemanaModel.create(diaSemana)
        return this.diaSemanaModel.save(dia_semana)
    }

    
}