import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  name = 'Gabriel';
  age = 20;
  img = 'https://www.w3schools.com/howto/img_avatar.png'
  btnDisabled = true
  person = {
    name: 'Gabriel',
    age: 20,
    avatar: 'https://www.w3schools.com/howto/img_avatar.png'
  }
}
