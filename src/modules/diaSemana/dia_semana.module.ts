import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { DiaSemana } from "src/model/entities/DiaSemana";
import { DiaSemanaController } from "./dia_semana.controller";
import { DiaSemanaService } from "./dia_semana.service";
import { DiaSemanaRepository } from "./dia_semana.repository";


@Module({
    imports: [TypeOrmModule.forFeature([DiaSemana])],
    controllers: [DiaSemanaController],
    providers: [DiaSemanaService, DiaSemanaRepository]
})
export class DiaSemanaModule {}