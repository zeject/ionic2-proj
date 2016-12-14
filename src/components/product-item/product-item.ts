import { Component } from '@angular/core';
import { GoodsDetailComponent } from '../goods-detail/goods-detail';
import { NavController } from 'ionic-angular';

/*
  Generated class for the ProductItem component.

  See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
  for more info on Angular 2 Components.
*/
@Component({
  selector: 'product-item',
  templateUrl: 'product-item.html'
})
export class ProductItemComponent {


  constructor(public navCtrl: NavController) { }
  goToDetail() {
    this.navCtrl.push(GoodsDetailComponent, {}, { animate: true });
  }
}
