import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'basic-event-binding-exercise';
  times = 0;

  onClickButton()
  {
    this.times++;
    console.log(`You clicked ${this.times}!`);
  }
}
