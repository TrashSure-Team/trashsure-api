import {
  BadRequestException,
  Body,
  Controller,
  Get,
  Post,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UserService } from './user.service';

@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  @UsePipes(ValidationPipe)
  async createUser(@Body() body: CreateUserDto) {
    const existingUser = await this.userService.findUserByEmail(body.email);

    if (existingUser) {
      throw new BadRequestException('User already exists.');
    }

    const user = await this.userService.createUser(body);
    return {
      message: 'User created successfully.',
      data: user,
    };
  }

  @Get()
  async findAllUsers() {
    const users = await this.userService.findAllUsers();
    return {
      message: 'Users retrieved successfully.',
      data: users,
    };
  }
}
