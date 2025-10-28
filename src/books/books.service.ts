import { Inject, Injectable } from '@nestjs/common';
import { DeleteResult, Repository, UpdateResult } from 'typeorm';
import { Book } from './entities/book.entity';

@Injectable()
export class BooksService {
  constructor(
    @Inject('BOOK_REPOSITORY')
    private bookRepository: Repository<Book>,
  ) { }

  create(createBookDto: Partial<Book>): Promise<Book> {
    return this.bookRepository.save(createBookDto);
  }

  findAll(): Promise<Book[]> {
    return this.bookRepository.find();
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
