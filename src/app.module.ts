import { Module } from '@nestjs/common';
import { HistoryModule } from './modules/history/history.module';
import { CategoryModule } from './modules/category/category.module';

@Module({
  imports: [HistoryModule, CategoryModule],
  providers: [],
})
export class AppModule {}
