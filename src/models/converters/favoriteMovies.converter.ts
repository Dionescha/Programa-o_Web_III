import { Injectable } from '@nestjs/common';

import favoriteMoviesEntity from '../entities/favoriteMovies.entity';
import favoriteMoviesOutput from '../dto/output/favoriteMovies.output';
import favoriteMoviesInput from '../dto/input/favoriteMovies.input';

@Injectable()
export default class favoriteMoviesConverter {
  inputToEntity(input: favoriteMoviesInput, entity: favoriteMoviesEntity) {
    entity.id = input.id;
    entity.titulo = input.titulo;
    entity.imagem = input.imagem;
    entity.createdAt = new Date();
    entity.updatedAt = new Date();
    /*entity.user = input.UserEntity;*/
    return entity;
  }

  entityToOutput(entity: favoriteMoviesEntity): favoriteMoviesOutput {
    const output = new favoriteMoviesOutput();

    output.id = entity.id;
    output.titulo = entity.titulo;
    output.imagem = entity.imagem;
    output.createdAt = entity.createdAt;
    output.updatedAt = entity.updatedAt;
    /*output.UserEntity = entity.user;*/

    return output;
  }
}
