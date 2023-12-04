import {
  Body,
  Param,
  Controller,
  Delete,
  Get,
  Post,
  UsePipes,
  ValidationPipe,
  NotFoundException,
} from '@nestjs/common';
import { CreateHistoryDto } from './dto/create-history.dto';
import { HistoryService } from './history.service';

@Controller('histories')
export class HistoryController {
  constructor(private readonly historyService: HistoryService) {}

  @Get(':id')
  async getHistoryById(@Param('id') id: string) {
    const history = await this.historyService.findHistoryById(+id);

    if (!history) {
      throw new NotFoundException('History not found.');
    }

    return {
      message: 'History retrieved successfully.',
      data: history,
    };
  }

  @Get()
  async getHistories() {
    const histories = await this.historyService.findAllHistories();
    return {
      message: 'Histories retrieved successfully.',
      data: histories,
    };
  }

  @Post()
  @UsePipes(ValidationPipe)
  async createHistory(@Body() body: CreateHistoryDto) {
    const history = await this.historyService.createHistory(body);
    return {
      message: 'History created successfully.',
      data: history,
    };
  }

  @Delete(':id')
  async deleteHistory(@Param('id') id: string) {
    const history = await this.historyService.findHistoryById(+id);

    if (!history) {
      throw new NotFoundException('History not found.');
    }

    await this.historyService.deleteHistory(+id);
    return {
      message: 'History deleted successfully.',
    };
  }
}
