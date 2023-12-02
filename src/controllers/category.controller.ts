import { Controller, Get } from '@nestjs/common';
import { CategoryService } from 'src/services/category.service';

@Controller('categories')
export class CategoryController {
  constructor(private readonly categoryService: CategoryService) {}

  @Get()
  async getCategories() {
    return {
      message: 'Categories retrieved successfully.',
      data: await this.categoryService.findAll(),
    };
  }
}
