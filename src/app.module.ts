import { Controller, Get, Module, Redirect } from '@nestjs/common';
import { UserModule } from './modules/user/user.module';
import { HistoryModule } from './modules/history/history.module';
import { TypeModule } from './modules/type/type.module';
import { StorageModule } from './modules/storage/storage.module';
import { AuthModule } from './modules/auth/auth.module';
import { FirebaseModule } from './modules/firebase/firebase.module';
import { AppController } from './app.controller';

@Module({
  imports: [HistoryModule, TypeModule, UserModule, StorageModule],
  controllers: [AppController],
  providers: [FirebaseModule, AuthModule],
})
export class AppModule {}
