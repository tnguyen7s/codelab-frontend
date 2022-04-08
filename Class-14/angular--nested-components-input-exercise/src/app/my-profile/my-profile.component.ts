import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-my-profile',
  templateUrl: './my-profile.component.html',
  styleUrls: ['./my-profile.component.css']
})
export class MyProfileComponent implements OnInit {
  @Input() posts: String[];
  constructor() { }

  ngOnInit(): void {
  }

}
