import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BookshelfComponent } from './bookshelf/bookshelf.component';
import { BookshelfListComponent } from './bookshelf-list/bookshelf-list.component';

@NgModule({
  declarations: [
    AppComponent,
    BookshelfComponent,
    BookshelfListComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
