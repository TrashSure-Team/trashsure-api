import { Controller, Get } from '@nestjs/common';
import { TypeService } from './type.service';

@Controller('types')
export class TypeController {
  constructor(private readonly typeService: TypeService) {}

  @Get()
  async getTypes() {
    const types = await this.typeService.findAllTypes();
    return {
      message: 'Types retrieved successfully.',
      data: types,
    };
  }
}
