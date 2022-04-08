import { Component, EventEmitter, OnInit, Output} from '@angular/core';
import { Book } from 'src/app/shared/book/book.model';

@Component({
  selector: 'app-booklist',
  templateUrl: './booklist.component.html',
  styleUrls: ['./booklist.component.css']
})
export class BooklistComponent implements OnInit {
  @Output() bookSelected = new EventEmitter<Book>();

  books: Book[] = [
    new Book(
      "Having Fun with Angular",
      "Aurora Ng",
      "Non-fiction",
      "https://source.unsplash.com/50x50/?book"
    ),
    new Book(
      "Master CSS",
      "A G",
      "Comic",
      "https://source.unsplash.com/50x50/?book-comic"
    )];
  constructor() { }

  ngOnInit(): void {
  }

  onSelectBook(book: Book)
  {
    this.bookSelected.emit(book);
  }

}
