import {
  Controller,
  Get,
  Param,
  Delete,
  Patch,
  Post,
  Query,
  Body,
  Put,
} from '@nestjs/common';
import { favoriteMoviesService } from '../services/favoriteMovies.service';
import { ApiTags, ApiCreatedResponse } from '@nestjs/swagger';
import favoriteMoviesOutput from '../models/dto/output/favoriteMovies.output';
import favoriteMoviesInput from '../models/dto/input/favoriteMovies.input';

@ApiTags('favoriteMovies')
@Controller('favoriteMovies')
export class favoriteMoviesController {
  constructor(private readonly favoriteMoviesService: favoriteMoviesService) {}

  @Get()
  @ApiCreatedResponse({ type: favoriteMoviesOutput, isArray: true })
  findAll(): Promise<favoriteMoviesOutput[]> {
    return this.favoriteMoviesService.findAll();
  }

  @Post()
  save(@Body() input: favoriteMoviesInput) {
    return this.favoriteMoviesService.save(input);
  }
  @Put(':id')
  @ApiCreatedResponse({ type: favoriteMoviesOutput })
  update(
    @Param(':id') id: string,
    @Body() input: favoriteMoviesInput,
  ): Promise<favoriteMoviesOutput> {
    return this.favoriteMoviesService.update(+id, input);
  }

  @Get(':id')
  @ApiCreatedResponse({ type: favoriteMoviesOutput })
  findOne(@Param('id') id: string) {
    return this.favoriteMoviesService.findOne(+id);
  }

  @Patch(':id')
  @ApiCreatedResponse({ type: favoriteMoviesOutput })
  updateName(@Param('id') id: string, @Query('name') name: string) {
    return this.favoriteMoviesService.updateName(+id, name);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.favoriteMoviesService.remove(+id);
  }
}
