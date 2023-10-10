import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Agenda } from "src/model/entities/Agenda";
import { AgendaController } from "./agenda.controller";
import { AgendaService } from "./agenda.service";
import { AgendaRepository } from "./agenda.repository";


@Module({
    imports: [TypeOrmModule.forFeature([Agenda])],
    controllers: [AgendaController],
    providers: [AgendaService, AgendaRepository],
  })
  export class AgendaModule {}