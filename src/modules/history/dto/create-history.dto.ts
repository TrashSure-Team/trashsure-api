import { IsNotEmpty } from 'class-validator';

export class CreateHistoryDto {
  imageUrl: string;

  @IsNotEmpty()
  confidenceThreshold: number;

  @IsNotEmpty()
  userId: number;

  @IsNotEmpty()
  typeId: number;
}
