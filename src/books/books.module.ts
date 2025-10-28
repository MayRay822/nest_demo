import { Module } from '@nestjs/common';
import { BooksController } from './books.controller';
import { DatabaseModule } from 'src/database/database.module';
import { booksProviders } from './books.providers';
import { BooksService } from './books.service';

@Module({
  imports: [DatabaseModule],
  controllers: [BooksController],
  providers: [...booksProviders, BooksService],
})

export class BooksModule { }
