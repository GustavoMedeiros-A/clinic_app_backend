import { Controller, Post, Body, Get, Delete, Param } from '@nestjs/common';
import { EspecialistaService } from './especialista.service';
import { EspecialistaDTO } from './dtos/especialista.dto';


@Controller('/api/especialista')
export class EspecialistaController {
  constructor(private readonly especialistaService: EspecialistaService) {}

  @Get()
  public findAll() {
    return this.especialistaService.findAll();
  }

  @Post()
  public create(@Body() especialistaDTO: EspecialistaDTO) {
    return this.especialistaService.create(especialistaDTO);
  }

  @Delete(':id')
  public delete(@Param() id: number) {
    return this.especialistaService.deleteById(id)
  }
}
