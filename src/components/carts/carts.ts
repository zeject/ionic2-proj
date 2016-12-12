import { Component } from '@angular/core';

/*
  Generated class for the Carts component.

  See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
  for more info on Angular 2 Components.
*/
@Component({
  selector: 'carts',
  templateUrl: 'carts.html'
})
export class CartsComponent {

  text: string;

  constructor() {
    console.log('Hello Carts Component');
    this.text = 'Hello World';
  }

}
