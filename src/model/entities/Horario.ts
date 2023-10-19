import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { EspecialistaClinica } from './EspecialistaClinica';
import { DiaSemana } from './DiaSemana';

@Entity({ name: 'horario' })
export class Horario {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(
    () => EspecialistaClinica,
    (especialistaClinica) => especialistaClinica.id,
    { eager: true },
  )
  especialistaClinica: EspecialistaClinica;

  @ManyToOne(() => DiaSemana, (diaSemana) => diaSemana.id, { eager: true })
  id_dia_semana: DiaSemana;

  @Column()
  hora_inicial: string;

  @Column()
  minuto_inicial: string;

  @Column()
  hora_final: string;

  @Column()
  minuto_final: string;

  @Column()
  quantidade_atendimentos: string;
}
