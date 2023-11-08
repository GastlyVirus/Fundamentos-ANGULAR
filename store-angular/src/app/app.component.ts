import { Component } from '@angular/core';
import { Product } from './product.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  // title = 'store-angular';
  widthImg = 50;
  name = 'Gaston';
  lastName = 'Rocha';
  age = 30;
  title = 'STORE ANGULAR';
  img = 'https://www.w3schools.com/howto/img_avatar.png';
  link = 'https://www.instagram.com/gastonedgardorocha/';
  btnDisabled = true;

  newName = '';

  box = {
    width: 100,
    height: 100,
    background: 'red',
  };

  person = {
    name: 'Edgardo',
    age: 18,
    avatar: 'https://www.w3schools.com/howto/img_avatar.png'
  };

  names: string[] = ['gaston', 'blanquita', 'cristian', 'lucca', 'sonia', 'alberto', 'romina', 'leo', 'juana'];

  products: Product[] = [
    {
      name: "Dado",
      price: 2500,
      image: 'https://www.w3schools.com/howto/img_avatar.png',
      category: 'Azar'
    },
    {
      name: "Bicicleta",
      price: 155665,
      image: 'https://www.w3schools.com/howto/img_avatar.png'
    },
    {
      name: "Pelota",
      price: 10565,
      image: 'https://www.w3schools.com/howto/img_avatar.png'
    },
    {
      name: "Bicicleta",
      price: 155665,
      image: 'https://www.w3schools.com/howto/img_avatar.png'
    },
    {
      name: "Pelota",
      price: 10565,
      image: 'https://www.w3schools.com/howto/img_avatar.png'
    }
  ]

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

  addName() {
    this.names.push(this.newName);
    this.newName = '';
  }

  deleteName(index: number) {
    this.names.splice(index, 1)
  }
}
