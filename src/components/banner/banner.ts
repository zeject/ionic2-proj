import { Component, Input } from '@angular/core';

/*
  Generated class for the Banner component.

  See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
  for more info on Angular 2 Components.
*/
@Component({
  selector: 'banner',
  templateUrl: 'banner.html'
})
export class BannerComponent {

  @Input() banner: any[];

  constructor() {
    // this.banner = ['banner1', 'banner2', 'banner3'];
  }

}
