import { Component, OnInit } from '@angular/core';
import { Book } from 'src/app/shared/book/book.model';

@Component({
  selector: 'app-book-search-result',
  templateUrl: './book-search-result.component.html',
  styleUrls: ['./book-search-result.component.css']
})
export class BookSearchResultComponent implements OnInit {
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

}
