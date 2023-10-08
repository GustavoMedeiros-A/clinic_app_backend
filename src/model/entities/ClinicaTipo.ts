import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'tipo_clinica' })
export class TipoClinica {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nome: string;
}
