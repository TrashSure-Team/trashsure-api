import { Module } from '@nestjs/common';
import { PrismaService } from 'src/config/prisma.service';
import { HistoryController } from './history.controller';
import { HistoryService } from './history.service';
import { StorageService } from '../storage/storage.service';

@Module({
  controllers: [HistoryController],
  providers: [PrismaService, HistoryService, StorageService],
})
export class HistoryModule {}
