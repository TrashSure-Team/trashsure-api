import { IsNotEmpty } from 'class-validator';

export class CreateRecommendationDto {
  @IsNotEmpty()
  typeId: number;

  @IsNotEmpty()
  description: string;
}
