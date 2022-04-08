import { Component, OnInit, Input, EventEmitter, Output} from '@angular/core';
import { Book } from './book.model';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {
  @Output() selectedBook = new EventEmitter();
  @Input() book:Book;
  constructor() { }

  ngOnInit(): void {
  }

  onSelectBook()
  {
    this.selectedBook.emit();
  }

}
