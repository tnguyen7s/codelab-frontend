import { Component, OnInit, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  @Output() pageSelected = new EventEmitter<string>();
  show=false;
  constructor() { }

  ngOnInit(): void {
  }

  onSelectPage(page: string){
    this.pageSelected.emit(page);
  }
}
