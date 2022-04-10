import { Component, OnInit } from '@angular/core';
import { BookshelfComponent } from 'src/app/bookshelf/bookshelf.component';
import { BookshelfService } from 'src/app/bookshelf/bookshelf.service';
import { Book } from 'src/app/shared/book/book.model';
import { LibraryService } from '../library.service';

@Component({
  selector: 'app-book-search-result',
  templateUrl: './book-search-result.component.html',
  styleUrls: ['./book-search-result.component.css']
})
export class BookSearchResultComponent implements OnInit {
  books: Book[];

  constructor(private libraryService: LibraryService, private bookshelfService: BookshelfService) { }

  ngOnInit(): void {
    this.books = this.libraryService.getBooks();
  }

  onSaveBook(book: Book)
  {
    this.bookshelfService.addBook(book);
  }
}
