import { Injectable } from '@nestjs/common';
import { Recommendation } from '@prisma/client';
import { PrismaService } from 'src/config/prisma.service';
import { CreateRecommendationDto } from './dto/create-recommendation.dto';

@Injectable()
export class RecommendationService {
  constructor(private prisma: PrismaService) {}

  async findRecommendationByTypeID(typeId: number): Promise<Recommendation[]> {
    return await this.prisma.recommendation.findMany({
      where: { typeId: typeId },
    });
  }

  async findAllRecommendation(): Promise<Recommendation[]> {
    return await this.prisma.recommendation.findMany();
  }

  async createRecommendation(
    data: CreateRecommendationDto,
  ): Promise<Recommendation> {
    return await this.prisma.recommendation.create({ data });
  }

  async deleteRecommendation(id: number): Promise<Recommendation> {
    return await this.prisma.recommendation.delete({ where: { id } });
  }

  async updateRecommendation(
    id: number,
    data: CreateRecommendationDto,
  ): Promise<Recommendation> {
    return await this.prisma.recommendation.update({
      where: { id },
      data: data,
    });
  }
}
