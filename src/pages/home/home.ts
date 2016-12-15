import { Component, ViewChild } from '@angular/core';
import { NavController, NavParams, Tabs } from 'ionic-angular';
import { DashboardPage } from './dashboard';
import { StorePage } from '../store/store';
import { CartPage } from '../cart/cart';
import { MyPage } from '../my/my';

@Component({
  templateUrl: 'home.html'
})
export class HomePage {
  tabOne = DashboardPage;
  tabTwo = StorePage;
  tabThree = CartPage;
  tabFour = MyPage;

  @ViewChild('myTabs') tabRef: Tabs;
  tabId: number;
  constructor(public navCtrl: NavController, public params: NavParams) {
    this.tabId = params.get("tabId");
  }

  ionViewDidLoad() {
    // this.tabRef.select(+this.tabId || 0);
  }

}
