import { Component } from '@angular/core';
import { BookshelfComponent } from './bookshelf/bookshelf.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  book: {};
  title = 'angular-two-levels-custom-events';

  onChangeBook(book: {})
  {
    this.book = book;
  }
}
