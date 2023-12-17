import { Module } from '@nestjs/common';
import { AuthGuard } from './auth.guard';
import { FirebaseService } from '../firebase/firebase.service';
import { FirebaseModule } from '../firebase/firebase.module';

@Module({
  controllers: [],
  imports: [FirebaseModule],
  providers: [AuthGuard, FirebaseService],
})
export class AuthModule {}
