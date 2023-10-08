import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'clinica' })
export class Clinica {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nome: string;

  @Column({ type: 'int', unsigned: true })
  codigo: number;

  @Column()
  bloqueado: string;

  @Column()
  localizacao: string;

  @Column()
  ramal: string;

  @Column({ type: 'int', unsigned: true, nullable: true })
  responsavel: number | null;

  @Column({ nullable: true })
  obs: string;

  @Column({ name: 'field_tipo_value' })
  fieldTipoValue: string;
}
