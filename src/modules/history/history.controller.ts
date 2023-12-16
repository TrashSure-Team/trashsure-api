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
  BadRequestException,
  UseInterceptors,
  UploadedFile,
  UseGuards,
} from '@nestjs/common';
import { CreateHistoryDto } from './dto/create-history.dto';
import { HistoryService } from './history.service';
import { FileInterceptor } from '@nestjs/platform-express';
import { StorageService } from '../storage/storage.service';
import { AuthGuard } from '../auth/auth.guard';

@Controller('histories')
export class HistoryController {
  constructor(
    private readonly historyService: HistoryService,
    private readonly storageService: StorageService,
  ) {}

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

  @UseGuards(AuthGuard)
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
  @UseInterceptors(
    FileInterceptor('image', {
      limits: {
        files: 1,
        fileSize: 1024 * 1024,
      },
    }),
  )
  async createHistory(
    @Body() body: CreateHistoryDto,
    @UploadedFile() image: Express.Multer.File,
  ) {
    if (!image) {
      throw new BadRequestException('Image is required.');
    }

    const historyData = {
      ...body,
      imageUrl: await this.storageService.upload(image),
      confidenceThreshold: +body.confidenceThreshold,
      userId: +body.userId,
      typeId: +body.typeId,
    };

    const history = await this.historyService.createHistory(historyData);

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
