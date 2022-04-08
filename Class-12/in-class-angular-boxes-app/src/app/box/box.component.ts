import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-box',
  templateUrl: './box.component.html',
  styleUrls: ['./box.component.css']
})
export class BoxComponent implements OnInit {
  state ="";

  constructor() { }

  // activate this method when object created
  ngOnInit(): void {
    Math.random()%2<0.5? this.state = "empty":this.state="full";
  }

  getColor()
  {
    return (this.state=="full")? "green":"red";
  }

}
