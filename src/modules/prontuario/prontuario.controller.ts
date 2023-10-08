import { Controller, Post, Body, Get } from '@nestjs/common';
import { ProntuarioService } from './prontuario.service';
import { ProntuarioDTO } from './dtos/Prontuario.dto';

@Controller('/api/prontuario')
export class ProntuarioController {
  constructor(private readonly prontuarioService: ProntuarioService) {}

  @Get()
  public findAll() {
    return this.prontuarioService.findAll();
  }

  @Post()
  public createProntuario(@Body() prontuarioDto: ProntuarioDTO) {
    return this.prontuarioService.createProntuario(prontuarioDto);
  }
}
