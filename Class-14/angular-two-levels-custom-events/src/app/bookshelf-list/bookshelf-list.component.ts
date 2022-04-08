import { Component, OnInit,EventEmitter, Output } from '@angular/core';


@Component({
  selector: 'app-bookshelf-list',
  templateUrl: './bookshelf-list.component.html',
  styleUrls: ['./bookshelf-list.component.css']
})
export class BookshelfListComponent implements OnInit {
  @Output() selectedBook = new EventEmitter<{}>();
  books = [{
    "title" : "Having fun with JavaScript",
    "author": "A1"
  },
  {
    "title": "Master CSS",
    "author": "A2"
  }]
  constructor() { }

  ngOnInit(): void {
  }

  onClick(e)
  {
    this.selectedBook.emit(e);
  }
}
