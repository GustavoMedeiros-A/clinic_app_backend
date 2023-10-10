import { Controller, Post, Body, Get, Delete, Param } from '@nestjs/common';
import { AgendaService } from './agenda.service';
import { AgendaDTO } from './dtos/agenda.dto';

@Controller('/api/agenda')
export class AgendaController {
  constructor(private readonly agendaService: AgendaService) {}

  @Get()
  public findAll() {
    return this.agendaService.findAll();
  }

//   @Post()
//   public createAgenda(@Body() agendaDto: AgendaDTO) {
//     return this.agendaService.createAgenda(agendaDto);
//   }

  @Delete(':id')
  public deleteAgenda(@Param() id: number) {
    return this.agendaService.deleteById(id)
  }
}
