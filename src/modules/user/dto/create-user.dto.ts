import { IsNotEmpty } from 'class-validator';

export class CreateUserDto {
  @IsNotEmpty()
  id: string;

  fullname: string;

  @IsNotEmpty()
  email: string;
}
