import { Module } from '@nestjs/common';
import { HistoryModule } from './modules/history/history.module';

@Module({
  imports: [HistoryModule],
  providers: [],
})
export class AppModule {}
