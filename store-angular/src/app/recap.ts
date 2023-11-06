import { last } from "rxjs";

const username = 'Gaston';
const username1: string = 'Gaston';
const username2: number = 1;
const username3: number | string = 'Gaston'


const sum = (a: number, b: number) => {
  return a + b;
}
sum(12, 58);


class Person {
               age: number;
  private lastName: string

  constructor(age: number, lastName: string) {
    this.age = age;
    this.lastName = lastName;
  }
}
const gaston = new Person(30, 'Rocha');
gaston.age;
gaston.lastName; // Esta privado el valor
