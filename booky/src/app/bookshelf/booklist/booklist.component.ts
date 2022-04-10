import { Component, EventEmitter, OnInit, Output} from '@angular/core';
import { Book } from 'src/app/shared/book/book.model';
import { BookshelfService } from '../bookshelf.service';

@Component({
  selector: 'app-booklist',
  templateUrl: './booklist.component.html',
  styleUrls: ['./booklist.component.css']
})
export class BooklistComponent implements OnInit {
  books: Book[];
  constructor(private bookshelfService: BookshelfService) { }

  ngOnInit(): void {
    this.books = this.bookshelfService.getBooks();
    this.bookshelfService.booksChanged.subscribe(()=> {
      this.books = this.bookshelfService.getBooks();
    });
  }
  onRemoveBook(idx: number)
  {
    this.bookshelfService.removeBook(idx);
  }
}
