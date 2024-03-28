import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { Express } from 'express';
import 'multer';

@Injectable()
export class VideosService {
  constructor(private readonly prisma: PrismaService) {}

  upload(file: Express.Multer.File) {
    return console.log(file);
  }
}
