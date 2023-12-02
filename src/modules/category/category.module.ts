import { Module } from '@nestjs/common';
import { CategoryController } from './controllers/category.controller';
import { CategoryService } from './services/category.service';
import { CategoryApplication } from './applications/category.application';

@Module({
  controllers: [CategoryController],
  providers: [CategoryService, CategoryApplication],
})
export class CategoryModule {}
