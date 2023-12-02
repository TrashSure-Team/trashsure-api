import { Module } from '@nestjs/common';
import { CategoryController } from './controllers/category.controller';
import { CategoryService } from './services/category.service';
import { CategoryApplication } from './applications/category.application';
import { PrismaService } from 'src/config/prisma.service';

@Module({
  controllers: [CategoryController],
  providers: [PrismaService, CategoryService, CategoryApplication],
})
export class CategoryModule {}
