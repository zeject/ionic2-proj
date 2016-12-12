import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { DashboardPage } from './dashboard';
import { StorePage } from '../store/store';
import { CartPage } from '../cart/cart';

@Component({
  templateUrl: 'home.html'
})
export class HomePage {
  tabOne = DashboardPage;
  tabTwo = StorePage;
  tabThree = CartPage;
  tabFour = DashboardPage;
  constructor(public navCtrl: NavController) { }

  ionViewDidLoad() {
    console.log('Hello HomePage Page');
  }

}
