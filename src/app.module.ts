import { Module } from '@nestjs/common';
import { UserModule } from './modules/user/user.module';
import { HistoryModule } from './modules/history/history.module';
import { TypeModule } from './modules/type/type.module';
import { StorageModule } from './modules/storage/storage.module';

@Module({
  imports: [HistoryModule, TypeModule, UserModule, StorageModule],
  providers: [],
})
export class AppModule {}
