import { Column, Entity, PrimaryColumn } from 'typeorm';

@Entity('filmes_favoritos')
export default class favoriteMoviesEntity {
  @PrimaryColumn()
  id?: number;

  @Column({ name: 'titulo', type: 'varchar' })
  titulo: string;

  @Column({ name: 'imagem', type: 'varchar' })
  imagem: string;

  @Column({ name: 'user_Id', type: 'varchar' })
  user_id: string;

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
