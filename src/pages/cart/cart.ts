import { Component, ViewChild, OnInit } from '@angular/core';
import { NavController, Content } from 'ionic-angular';

/*
  Generated class for the Cart page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-cart',
  templateUrl: 'cart.html'
})
export class CartPage implements OnInit {
  @ViewChild(Content) content: Content;

  showFab = false;
  constructor(public navCtrl: NavController) { }

  ngOnInit(): void {
  }

  onScrollChange(e) {
    console.log(e);
    if (this.content.getScrollTop() > 500) {
      this.showFab = true;
    }
  }

  scrollTo() {
    this.content.scrollToTop();
    this.showFab = false;
  }
}
