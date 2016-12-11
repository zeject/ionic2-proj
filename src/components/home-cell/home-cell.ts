import { Component, Input } from '@angular/core';

/*
  Generated class for the HomeCell component.

  See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
  for more info on Angular 2 Components.
*/
@Component({
  selector: 'home-cell',
  templateUrl: 'home-cell.html'
})
export class HomeCellComponent {

  @Input() cell: any[];

  constructor() {
  }

}
