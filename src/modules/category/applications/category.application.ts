import { Injectable } from '@nestjs/common';
import { CategoryService } from '../services/category.service';

@Injectable()
export class CategoryApplication {
  constructor(private readonly categoryService: CategoryService) {}

  async findAll() {
    return await this.categoryService.findAll();
  }
}
