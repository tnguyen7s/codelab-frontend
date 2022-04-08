import { Component } from '@angular/core';
import { User } from './user.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-ngFor-input-decorator-exercise';
  users = [new User("Ethan", 0), new User("Tuyen", 1), new User("William",2), new User("Jon", 3)]
}
