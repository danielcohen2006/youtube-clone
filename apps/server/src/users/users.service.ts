import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { FindOrCreateDto } from './dto/find-or-create.dto';

@Injectable()
export class UsersService {
  constructor(private readonly prisma: PrismaService) {}

  async findOrCreate({ clerkId }: FindOrCreateDto) {
    return this.prisma.users.upsert({
      where: { clerkId },
      create: { clerkId },
      update: {},
    });
  }
}
