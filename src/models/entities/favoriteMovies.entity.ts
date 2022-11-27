import { Column, Entity, PrimaryColumn, ManyToOne, JoinColumn } from 'typeorm';
import UserEntity from './user.entity';

@Entity('filmes_favoritos')
export default class favoriteMoviesEntity {
  @PrimaryColumn()
  id?: number;

  @Column({ name: 'titulo', type: 'varchar' })
  titulo: string;

  @Column({ name: 'imagem', type: 'varchar' })
  imagem: string;

  /*@ManyToOne(() => UserEntity, (usuarios) => usuarios.filmesFavoritos)
  @JoinColumn({ name: 'user_id' })
  user: number; */

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
