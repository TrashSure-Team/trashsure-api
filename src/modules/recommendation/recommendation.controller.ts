import {
  BadRequestException,
  Body,
  Controller,
  Delete,
  Get,
  Logger,
  NotFoundException,
  Param,
  Patch,
  Post,
  Req,
  UseGuards,
} from '@nestjs/common';
import { AuthGuard } from 'src/modules/auth/auth.guard';
import { RecommendationService } from './recommendation.service';
import { CreateRecommendationDto } from './dto/create-recommendation.dto';

@UseGuards(AuthGuard)
@Controller('recommendations')
export class RecommendationController {
  constructor(private readonly recommendationService: RecommendationService) {}

  @Get(':typeId')
  async getRecommendationFormTypeId(@Param('typeId') typeId: number) {
    const recommendations =
      await this.recommendationService.findRecommendationByTypeID(+typeId);

    if (!recommendations) {
      throw new NotFoundException('Type not found.');
    }

    return {
      message: 'Recommendation retrieved successfully.',
      data: recommendations,
    };
  }

  @Get()
  async getAllRecommendation() {
    const recommendations =
      await this.recommendationService.findAllRecommendation();
    return {
      message: 'Recommendation retrieved successfully.',
      data: recommendations,
    };
  }

  @Post()
  async createRecommendation(@Body() body: CreateRecommendationDto) {
    const recommendationData: CreateRecommendationDto = {
      typeId: body.typeId,
      description: body.description,
    };

    const createdRecommendation =
      await this.recommendationService.createRecommendation(recommendationData);
    return {
      message: 'recommendation created successfully.',
      data: createdRecommendation,
    };
  }

  @Delete(':id')
  async deleteRecommendation(@Param('id') id: number) {
    await this.recommendationService.deleteRecommendation(+id);
    return {
      message: 'History deleted successfully.',
    };
  }
  @Patch(':id')
  async updateRecommendation(
    @Param('id') id: number,
    @Body() body: CreateRecommendationDto,
  ) {
    const recommendationData: CreateRecommendationDto = {
      typeId: body.typeId,
      description: body.description,
    };
    const updatedRecommendation =
      await this.recommendationService.updateRecommendation(
        +id,
        recommendationData,
      );
    return {
      message: 'recommendation updated successfully.',
      data: updatedRecommendation,
    };
  }
}
