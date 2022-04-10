import { EventEmitter, Injectable } from "@angular/core";
import { Book } from "../shared/book/book.model";

@Injectable({
  providedIn: "root"
})
export class BookshelfService{
  bookSelected = new EventEmitter<Book>();
  booksChanged = new EventEmitter();
  private books: Book[] = [
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

  getBooks()
  {
    return this.books.slice();
  }

  addBook(book: Book)
  {
    this.books.push(book);
    this.booksChanged.emit();
  }

  removeBook(idx: number)
  {
    this.books.splice(idx, 1);
    this.booksChanged.emit();
  }
}
