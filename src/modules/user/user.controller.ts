import {
  BadRequestException,
  Body,
  Controller,
  Get,
  Post,
  Req,
  UseGuards,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { UserService } from './user.service';
import { AuthGuard } from '../auth/auth.guard';
import { CreateUserDto } from './dto/create-user.dto';

@UseGuards(AuthGuard)
@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  async createUser(@Req() request) {
    const { user } = request;

    const existingUser = await this.userService.findUserById(user.uid);

    if (existingUser) {
      throw new BadRequestException('User already exists.');
    }

    const userData: CreateUserDto = {
      id: user.uid,
      fullname: user.name,
      email: user.email,
    };

    const createdUser = await this.userService.createUser(userData);
    return {
      message: 'User created successfully.',
      data: createdUser,
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
