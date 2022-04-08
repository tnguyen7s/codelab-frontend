import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-boxes',
  templateUrl: './boxes.component.html',
  styleUrls: ['./boxes.component.css']
})
export class BoxesComponent implements OnInit {
  canOpenNewBox = false;
  boxName = "";
  haveOpenBox = false;
  boxes:string[] = [];

  constructor() { }

  ngOnInit(): void {
    setTimeout(() => {
      this.canOpenNewBox = true;
    }, 3000);
  }

  onOpenNewBox(){
    this.boxes.push(this.boxName);
    this.haveOpenBox = true;
    setTimeout(() => {
      this.haveOpenBox = false;
    }, 3000);
  }

}
