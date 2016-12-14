import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

/*
  Generated class for the GoodsDetail component.

  See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
  for more info on Angular 2 Components.
*/
@Component({
  selector: 'goods-detail',
  templateUrl: 'goods-detail.html'
})
export class GoodsDetailComponent {

  page: String = 'goodsPics';

  constructor(public navCtrl: NavController) {

  }

  goBack() {
    this.navCtrl.pop();
  }
}
