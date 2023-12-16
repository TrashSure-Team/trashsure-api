import { Injectable } from '@nestjs/common';
import { History } from '@prisma/client';
import { PrismaService } from 'src/config/prisma.service';
import { CreateHistoryDto } from './dto/create-history.dto';

@Injectable()
export class HistoryService {
  constructor(private prisma: PrismaService) {}

  async findHistoryByIdAndUserId(id: number, userId: string): Promise<History> {
    return await this.prisma.history.findUnique({
      where: {
        id,
        userId: userId,
      },
    });
  }

  async findAllHistories(userId: string): Promise<History[]> {
    return await this.prisma.history.findMany({
      where: {
        userId,
      },
    });
  }

  async createHistory(data: CreateHistoryDto): Promise<History> {
    return await this.prisma.history.create({ data });
  }

  async deleteHistory(id: number): Promise<History> {
    return await this.prisma.history.delete({ where: { id } });
  }
}
