import { Module } from '@nestjs/common';
import { PrismaService } from 'src/config/prisma.service';
import { TypeController } from './type.controller';
import { TypeService } from './type.service';

@Module({
  controllers: [TypeController],
  providers: [PrismaService, TypeService],
})
export class TypeModule {}
