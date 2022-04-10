import { Injectable } from "@angular/core";
import { Book } from "../shared/book/book.model";

@Injectable({
  providedIn: "root"
})
export class LibraryService{
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

}
