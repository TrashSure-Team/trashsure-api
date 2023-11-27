import { Module } from '@nestjs/common';
import { HistoryController } from './controllers/history.controller';
import { HistoryService } from './services/history.service';
import { HistoryApplication } from './applications/history.application';

@Module({
  controllers: [HistoryController],
  providers: [HistoryService, HistoryApplication],
})
export class HistoryModule {}
