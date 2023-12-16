import { Module } from '@nestjs/common';
import { PrismaService } from 'src/config/prisma.service';
import { HistoryController } from './history.controller';
import { HistoryService } from './history.service';
import { StorageService } from '../storage/storage.service';
import { FirebaseService } from '../firebase/firebase.service';
import { FirebaseModule } from '../firebase/firebase.module';

@Module({
  controllers: [HistoryController],
  imports: [FirebaseModule],
  providers: [PrismaService, HistoryService, StorageService, FirebaseService],
})
export class HistoryModule {}
