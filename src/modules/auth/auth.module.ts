import { Module } from '@nestjs/common';
import { AuthGuard } from './auth.guard';
import { FirebaseService } from '../firebase/firebase.service';

@Module({
  controllers: [],
  imports: [FirebaseService],
  providers: [AuthGuard],
})
export class AuthModule {}
