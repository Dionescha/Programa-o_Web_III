import { ApiProperty } from '@nestjs/swagger';

export default class favoriteMoviesInput {
  @ApiProperty()
  id?: number;

  @ApiProperty()
  titulo: string;

  @ApiProperty()
  imagem: string;

  @ApiProperty()
  user_Id: string;
}
