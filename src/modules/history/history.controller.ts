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
  Req,
} from '@nestjs/common';
import { CreateHistoryDto } from './dto/create-history.dto';
import { HistoryService } from './history.service';
import { FileInterceptor } from '@nestjs/platform-express';
import { StorageService } from '../storage/storage.service';
import { AuthGuard } from '../auth/auth.guard';

@UseGuards(AuthGuard)
@Controller('histories')
export class HistoryController {
  constructor(
    private readonly historyService: HistoryService,
    private readonly storageService: StorageService,
  ) {}

  @Get(':id')
  async getHistoryById(@Param('id') id: string, @Req() request) {
    const { uid } = request.user;
    const history = await this.historyService.findHistoryByIdAndUserId(
      +id,
      uid,
    );

    if (!history) {
      throw new NotFoundException('History not found.');
    }

    return {
      message: 'History retrieved successfully.',
      data: history,
    };
  }

  @Get()
  async getHistories(@Req() request) {
    const { uid } = request.user;
    const histories = await this.historyService.findAllHistories(uid);
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
    @Req() request,
  ) {
    const { uid } = request.user;
    if (!image) {
      throw new BadRequestException('Image is required.');
    }

    const historyData = {
      ...body,
      imageUrl: await this.storageService.upload(image),
      confidenceThreshold: +body.confidenceThreshold,
      userId: uid,
      typeId: +body.typeId,
    };

    const history = await this.historyService.createHistory(historyData);

    return {
      message: 'History created successfully.',
      data: history,
    };
  }

  @Delete(':id')
  async deleteHistory(@Param('id') id: string, @Req() request) {
    const { uid } = request.user;
    const history = await this.historyService.findHistoryByIdAndUserId(
      +id,
      uid,
    );

    if (!history) {
      throw new NotFoundException('History not found.');
    }

    await this.storageService.delete(history.imageUrl);
    await this.historyService.deleteHistory(+id);
    return {
      message: 'History deleted successfully.',
    };
  }
}
