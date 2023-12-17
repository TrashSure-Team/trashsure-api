import { IsNotEmpty } from 'class-validator';

export class CreateHistoryDto {
  imageUrl: string;

  @IsNotEmpty()
  confidenceThreshold: number;

  userId: string;

  @IsNotEmpty()
  typeId: number;
}
