import { ApiProperty } from '@nestjs/swagger';

export default class favoriteMoviesOutput {
  @ApiProperty()
  id: number;

  @ApiProperty()
  titulo: string;

  @ApiProperty()
  imagem: string;

  /* @ApiProperty()
  UserEntity: number;*/

  @ApiProperty()
  createdAt: Date;

  @ApiProperty()
  updatedAt: Date;
}
