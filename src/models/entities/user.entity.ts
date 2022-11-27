import { Column, Entity, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import favoriteMoviesConverter from '../converters/favoriteMovies.converter';
import favoriteMoviesEntity from '../entities/favoriteMovies.entity';
@Entity('usuarios')
export default class UserEntity {
  @PrimaryGeneratedColumn()
  id?: number;

  @Column({ name: 'nome', type: 'varchar' })
  name: string;

  @Column({ name: 'senha', type: 'varchar' })
  password: string;

  @Column({ name: 'ativo', type: 'boolean' })
  active: boolean;

  /*@OneToMany(
    () => favoriteMoviesEntity,
    (filmes_favoritos) => filmes_favoritos.user,
  )
  filmesFavoritos: favoriteMoviesEntity[];*/

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
