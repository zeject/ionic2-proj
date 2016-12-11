import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { DashboardPage } from './dashboard';

@Component({
  templateUrl: 'home.html'
})
export class HomePage {
  tabOne = DashboardPage;
  tabTwo = DashboardPage;
  tabThree = DashboardPage;
  tabFour = DashboardPage;
  constructor(public navCtrl: NavController) { }

  ionViewDidLoad() {
    console.log('Hello HomePage Page');
  }

}
