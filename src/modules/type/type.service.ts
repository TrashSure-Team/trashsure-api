import { Injectable } from '@nestjs/common';
import { Type } from '@prisma/client';
import { PrismaService } from 'src/config/prisma.service';

@Injectable()
export class TypeService {
  constructor(private prisma: PrismaService) {}

  async findAllTypes(): Promise<Type[]> {
    return await this.prisma.type.findMany();
  }
}
