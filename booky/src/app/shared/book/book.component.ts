import { Component, OnInit, Input, EventEmitter, Output} from '@angular/core';
import { BookshelfService } from 'src/app/bookshelf/bookshelf.service';
import { Book } from './book.model';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {
  @Input() book:Book;
  constructor(private bookshelfService: BookshelfService) { }

  ngOnInit(): void {
  }

  onSelectBook()
  {
    this.bookshelfService.bookSelected.emit(this.book);
  }

}
