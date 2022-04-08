import { Component, OnInit, EventEmitter, Output } from '@angular/core';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  input:string;
  @Output() mySearch = new EventEmitter<string>();
  constructor() { }

  ngOnInit(): void {
  }

  onInput()
  {
    this.mySearch.emit(this.input);

  }

}
