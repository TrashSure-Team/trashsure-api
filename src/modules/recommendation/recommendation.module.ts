import { Module } from '@nestjs/common';
import { PrismaService } from 'src/config/prisma.service';
import { RecommendationController } from './recommendation.controller';
import { FirebaseService } from '../firebase/firebase.service';
import { FirebaseModule } from '../firebase/firebase.module';
import { RecommendationService } from './recommendation.service';

@Module({
  imports: [FirebaseModule],
  controllers: [RecommendationController],
  providers: [PrismaService, FirebaseService, RecommendationService],
})
export class RecommendationModule {}
