import { Column, Entity, PrimaryColumn } from 'typeorm';

@Entity('usuarios')
export default class UserEntity {
  @PrimaryColumn()
  id?: number;

  @Column({ name: 'nome', type: 'varchar' })
  username: string;

  @Column({ name: 'ativo', type: 'boolean' })
  active: boolean;

  @Column({
    name: 'criado_em',
    type: 'timestamp',
  })
  createdAt: Date;

  @Column({
    name: 'atualizado_em',
    type: 'timestamp',
  })
  updatedAt: Date;
}
