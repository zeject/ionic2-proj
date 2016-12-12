import { Component } from '@angular/core';

/*
  Generated class for the CartItem component.

  See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
  for more info on Angular 2 Components.
*/
@Component({
  selector: 'cart-item',
  templateUrl: 'cart-item.html'
})
export class CartItemComponent {

  text: string;

  constructor() {
    console.log('Hello CartItem Component');
    this.text = 'Hello World';
  }

}
