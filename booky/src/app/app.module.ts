import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { BookComponent } from './shared/book/book.component';
import { BookshelfComponent } from './bookshelf/bookshelf.component';
import { BooklistComponent } from './bookshelf/booklist/booklist.component';
import { BookdetailsComponent } from './bookshelf/bookdetails/bookdetails.component';
import { BookLibraryComponent } from './book-library/book-library.component';
import { BookSearchComponent } from './book-library/book-search/book-search.component';
import { BookSearchResultComponent } from './book-library/book-search-result/book-search-result.component';
import { DropdownDirective } from './shared/directives/dropdown.directive';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    BookComponent,
    BookshelfComponent,
    BooklistComponent,
    BookdetailsComponent,
    BookLibraryComponent,
    BookSearchComponent,
    BookSearchResultComponent,
    DropdownDirective
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
