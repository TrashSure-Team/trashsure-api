import { Module } from '@nestjs/common';
import { PrismaService } from 'src/config/prisma.service';

@Module({
  controllers: [],
  providers: [PrismaService],
})
export class UserModule {}