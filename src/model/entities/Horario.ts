import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { EspecialistaClinica } from './EspecialistaClinica';

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

  @Column({ type: 'int', unsigned: true })
  id_dia_semana: number;

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
