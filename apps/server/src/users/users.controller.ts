import { Body, Controller, Post } from '@nestjs/common';
import { UsersService } from './users.service';
import { FindOrCreateDto } from './dto/find-or-create.dto';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post('find-or-create')
  findOrCreate(@Body() findOrCreateDto: FindOrCreateDto) {
    return this.usersService.findOrCreate(findOrCreateDto);
  }
}
