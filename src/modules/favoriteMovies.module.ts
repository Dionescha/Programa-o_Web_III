import { Module } from '@nestjs/common';
import { favoriteMoviesService } from '../services/favoriteMovies.service';
import { favoriteMoviesController } from '../controllers/favoriteMovies.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import favoriteMoviesEntity from '../models/entities/favoriteMovies.entity';
import favoriteMoviesConverter from '../models/converters/favoriteMovies.converter';

@Module({
  imports: [TypeOrmModule.forFeature([favoriteMoviesEntity])],
  controllers: [favoriteMoviesController],
  providers: [favoriteMoviesService, favoriteMoviesConverter],
})
export class FavoriteMoviesModule {}
