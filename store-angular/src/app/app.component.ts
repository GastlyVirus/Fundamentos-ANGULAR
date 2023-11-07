import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  // title = 'store-angular';
  name = 'Gaston';
  lastName = 'Rocha';
  age = 30;
  title = 'STORE ANGULAR';
  img = 'https://www.w3schools.com/howto/img_avatar.png';
  link = 'https://www.instagram.com/gastonedgardorocha/';
  btnDisabled = true;
  person = {
    name: 'Edgardo',
    age: 18,
    avatar: 'https://www.w3schools.com/howto/img_avatar.png'
  };

  names: string[]= ['gaston', 'blanquita', 'cristian', 'lucca', 'sonia', 'alberto', 'romina', 'leo', 'juana'];

  toggleButton() {
    this.btnDisabled = !this.btnDisabled;
  }

  increaseAge() {
    this.person.age += 1;
  }

  decreaseAge() {
    this.person.age -= 1;
  }

  onScroll(event: Event) {
    const element = event.target as HTMLElement;
    console.log("onScroll", element.scrollTop);
  }

  changeName(event: Event) {
    const element = event.target as HTMLInputElement;
    this.person.name = element.value;
    console.log("changeName", element.value);
  }
}
