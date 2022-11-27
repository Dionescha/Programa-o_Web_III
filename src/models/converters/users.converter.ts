import { Injectable } from '@nestjs/common';

import UserEntity from '../entities/user.entity';
import UsersOutput from '../dto/output/users.output';
import UsersInput from '../dto/input/users.input';
import favoriteMoviesInput from '../dto/input/favoriteMovies.input';
import favoriteMoviesEntity from '../entities/favoriteMovies.entity';
@Injectable()
export default class UsersConverter {
  inputToEntity(input: UsersInput, entity: UserEntity) {
    entity.id = input.id;
    entity.name = input.name;
    entity.password = input.password;
    entity.active = input.active;
    entity.createdAt = new Date();
    entity.updatedAt = new Date();
    /*entity.filmesFavoritos = input.favoriteMoviesEntity;*/
    return entity;
  }

  entityToOutput(entity: UserEntity): UsersOutput {
    const output = new UsersOutput();

    output.id = entity.id;
    output.name = entity.name;
    output.active = entity.active;
    output.createdAt = entity.createdAt;
    output.updatedAt = entity.updatedAt;

    return output;
  }
}
