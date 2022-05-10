import { Module } from '@nestjs/common';
import { BookBankService } from './book-bank.service';
import { BookBankResolver } from './book-bank.resolver';

@Module({
  providers: [BookBankService, BookBankResolver]
})
export class BookBankModule {}
