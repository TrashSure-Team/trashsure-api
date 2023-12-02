import { Controller, Get } from '@nestjs/common';
import { CategoryApplication } from '../applications/category.application';

@Controller('categories')
export class CategoryController {
  constructor(private readonly categoryApplication: CategoryApplication) {}

  @Get()
  async getCategories() {
    return {
      message: 'Categories retrieved successfully.',
      data: await this.categoryApplication.findAll(),
    };
  }
}
