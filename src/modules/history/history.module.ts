import { Module } from '@nestjs/common';
import { HistoryController } from 'src/controllers/history.controller';
import { HistoryService } from 'src/services/history.service';

@Module({
  controllers: [HistoryController],
  providers: [HistoryService],
})
export class HistoryModule {}
