import { Inject, Injectable } from '@nestjs/common';
import { DeleteResult, Repository, UpdateResult } from 'typeorm';
import { Book } from './entities/book.entity';
import { plainToInstance } from 'class-transformer'
import { BookRespDto } from './dto/book-resp.dto/book-resp.dto';

@Injectable()
export class BooksService {
  constructor(
    @Inject('BOOK_REPOSITORY')
    private bookRepository: Repository<Book>,
  ) { }

  create(createBookDto: Partial<Book>): Promise<Book> {
    return this.bookRepository.save(createBookDto);
  }

  async findAll(): Promise<BookRespDto[]> {
    const books = await this.bookRepository.find({
      order: {
        createdAt: 'DESC',
      },
    });
    return plainToInstance(BookRespDto, books, { excludeExtraneousValues: true });
  }

  findOne(id: number): Promise<Book> {
    return this.bookRepository.findOne({ where: { id } }) as Promise<Book>;
  }

  update(id: number, updateBookDto: Partial<Book>): Promise<UpdateResult> {
    return this.bookRepository.update(id, updateBookDto);
  }

  remove(id: number): Promise<DeleteResult> {
    return this.bookRepository.delete(id);
  }
}
