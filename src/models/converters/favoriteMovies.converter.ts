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
    entity.user_id = input.user_Id;
    entity.createdAt = new Date();
    entity.updatedAt = new Date();

    return entity;
  }

  entityToOutput(entity: favoriteMoviesEntity): favoriteMoviesOutput {
    const output = new favoriteMoviesOutput();

    output.id = entity.id;
    output.titulo = entity.titulo;
    output.imagem = entity.imagem;
    output.user_ID = entity.user_id;
    output.createdAt = entity.createdAt;
    output.updatedAt = entity.updatedAt;

    return output;
  }
}
