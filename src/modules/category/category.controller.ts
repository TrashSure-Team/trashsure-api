import { Controller, Get } from '@nestjs/common';
import { CategoryService } from './category.service';

@Controller('categories')
export class CategoryController {
  constructor(private readonly categoryService: CategoryService) {}

  @Get()
  async getCategories() {
    const categories = await this.categoryService.findAllCategories();
    return {
      message: 'Categories retrieved successfully.',
      data: categories,
    };
  }
}