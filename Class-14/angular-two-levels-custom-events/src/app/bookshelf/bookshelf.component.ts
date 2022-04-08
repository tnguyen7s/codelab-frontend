import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-bookshelf',
  templateUrl: './bookshelf.component.html',
  styleUrls: ['./bookshelf.component.css']
})
export class BookshelfComponent implements OnInit {
  @Output() bookSelected = new EventEmitter<{}>();
  constructor() { }

  ngOnInit(): void {
  }

  onBookSelected(book: {}){
    this.bookSelected.emit(book);
  }

}
