import { Injectable } from '@nestjs/common';
import { History } from '@prisma/client';
import { PrismaService } from 'src/config/prisma.service';
import { CreateHistoryDto } from './dto/create-history.dto';

@Injectable()
export class HistoryService {
  constructor(private prisma: PrismaService) {}

  async findHistoryById(id: number): Promise<History> {
    return await this.prisma.history.findUnique({ where: { id } });
  }

  async findAllHistories(): Promise<History[]> {
    return await this.prisma.history.findMany();
  }

  async createHistory(data: CreateHistoryDto): Promise<History> {
    return await this.prisma.history.create({ data });
  }

  async deleteHistory(id: number): Promise<History> {
    return await this.prisma.history.delete({ where: { id } });
  }
}
