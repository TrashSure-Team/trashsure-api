import { Module } from '@nestjs/common';
import { UserModule } from './modules/user/user.module';
import { HistoryModule } from './modules/history/history.module';
import { TypeModule } from './modules/type/type.module';

@Module({
  imports: [HistoryModule, TypeModule, UserModule],
  providers: [],
})
export class AppModule {}
