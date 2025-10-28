import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseInterceptors,
  ClassSerializerInterceptor
} from '@nestjs/common';
import { ApiTags, ApiBody, ApiOperation, ApiResponse } from '@nestjs/swagger';
import { BooksService } from './books.service';
import { Book } from './entities/book.entity';
import { CreateBookDto } from './dto/create-book.dto/create-book.dto';
import { BookRespDto } from './dto/book-resp.dto/book-resp.dto';

@ApiTags('books')
@Controller('books')
@UseInterceptors(ClassSerializerInterceptor)
export class BooksController {
  constructor(private readonly booksService: BooksService) { }

  @Post()
  @ApiBody({ type: CreateBookDto })
  @ApiOperation({ summary: '创建书籍' })
  @ApiResponse({ status: 200, type: BookRespDto })
  create(@Body() createBookDto: CreateBookDto) {
    return this.booksService.create(createBookDto);
  }

  @Get()
  @ApiOperation({ summary: '获取所有书籍' })
  @ApiResponse({ status: 200, type: [BookRespDto] })
  findAll(): Promise<BookRespDto[]> {
    return this.booksService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: '获取单个书籍' })
  @ApiResponse({ status: 200, type: BookRespDto })
  findOne(@Param('id') id: string) {
    return this.booksService.findOne(+id);
  }

  @Patch(':id')
  @ApiOperation({ summary: '更新书籍' })
  update(@Param('id') id: string, @Body() updateBookDto: Partial<Book>) {
    return this.booksService.update(+id, updateBookDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: '删除书籍' })
  remove(@Param('id') id: string) {
    return this.booksService.remove(+id);
  }
}
