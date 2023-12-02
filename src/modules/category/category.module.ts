import { Module } from '@nestjs/common';
import { CategoryController } from 'src/controllers/category.controller';
import { CategoryService } from 'src/services/category.service';
import { PrismaService } from 'src/config/prisma.service';

@Module({
  controllers: [CategoryController],
  providers: [PrismaService, CategoryService],
})
export class CategoryModule {}
