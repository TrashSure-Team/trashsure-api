import { Controller, Get } from '@nestjs/common';

@Controller('histories')
export class HistoryController {
  @Get()
  getHistories() {
    return {
      message: 'Histories retrieved successfully.',
      data: [],
    };
  }
}
