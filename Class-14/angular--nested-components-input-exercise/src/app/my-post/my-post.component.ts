import { Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'app-my-post',
  templateUrl: './my-post.component.html',
  styleUrls: ['./my-post.component.css']
})
export class MyPostComponent implements OnInit {
  @Input() posts:String[];
  constructor() { }

  ngOnInit(): void {
  }

}
