import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import favoriteMoviesEntity from '../models/entities/favoriteMovies.entity';
import { InjectRepository } from '@nestjs/typeorm';

import favoriteMoviesConverter from '../models/converters/favoriteMovies.converter';
import favoriteMoviesInput from '../models/dto/input/favoriteMovies.input';
import favoriteMoviesOutput from '../models/dto/output/favoriteMovies.output';

@Injectable()
export class favoriteMoviesService {
  constructor(
    @InjectRepository(favoriteMoviesEntity)
    private readonly userRepo: Repository<favoriteMoviesEntity>,
    private readonly favoriteMoviesConverter: favoriteMoviesConverter,
  ) {}

  async findAll(): Promise<favoriteMoviesOutput[]> {
    const favoriteMoviesEntities = await this.userRepo.find();

    const outputList = favoriteMoviesEntities.map((entity) => {
      return this.favoriteMoviesConverter.entityToOutput(entity);
    });

    return outputList;
  }

  async save(input: favoriteMoviesInput) {
    const entity = new favoriteMoviesEntity();

    const convertedEntity = this.favoriteMoviesConverter.inputToEntity(
      input,
      entity,
    );

    const savedEntity = await this.userRepo.save(convertedEntity);

    const output = this.favoriteMoviesConverter.entityToOutput(savedEntity);

    return output;
  }
  async update(
    id: number,
    input: favoriteMoviesInput,
  ): Promise<favoriteMoviesOutput> {
    const favoriteMoviesEntity = await this.userRepo.findOne({
      where: { id: id },
    });

    const convertedEntity = this.favoriteMoviesConverter.inputToEntity(
      input,
      favoriteMoviesEntity,
    );

    const savedEntity = await this.userRepo.save(convertedEntity);

    const output = this.favoriteMoviesConverter.entityToOutput(savedEntity);

    return output;
  }
  async findOne(id: number) {
    const favoriteMoviesEntity = await this.userRepo.findOne({
      where: { id: id },
    });

    const output =
      this.favoriteMoviesConverter.entityToOutput(favoriteMoviesEntity);

    return output;
  }

  async updateName(id: number, name: string) {
    const favoriteMoviesEntity = await this.userRepo.findOne({ where: { id } });

    favoriteMoviesEntity.titulo = name;

    const favoriteMoviesSaved = await this.userRepo.save(favoriteMoviesEntity);

    const output =
      this.favoriteMoviesConverter.entityToOutput(favoriteMoviesSaved);

    return output;
  }
  s;
  async remove(id: number) {
    return await this.userRepo.delete(id);
  }
}
