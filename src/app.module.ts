import { Module } from '@nestjs/common';
import { UserModule } from './modules/user/user.module';
import { HistoryModule } from './modules/history/history.module';
import { CategoryModule } from './modules/category/category.module';

@Module({
  imports: [HistoryModule, CategoryModule, UserModule],
  providers: [],
})
export class AppModule {}
