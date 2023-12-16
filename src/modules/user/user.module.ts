import { Module } from '@nestjs/common';
import { PrismaService } from 'src/config/prisma.service';
import { UserController } from './user.controller';
import { UserService } from './user.service';
import { FirebaseService } from '../firebase/firebase.service';
import { FirebaseModule } from '../firebase/firebase.module';

@Module({
  imports: [FirebaseModule],
  controllers: [UserController],
  providers: [PrismaService, UserService, FirebaseService],
})
export class UserModule {}
