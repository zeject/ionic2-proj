import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { DashboardPage } from '../pages/home/dashboard';
import { ComponentsModule } from '../components/components.module';
import { StorePage } from '../pages/store/store';
import { CartPage } from '../pages/cart/cart';
import { MyPage } from '../pages/my/my';
import { ScrollDirective } from '../directive/scroll.directive';
import { GoodsDetailComponent } from '../components/goods-detail/goods-detail';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    DashboardPage,
    StorePage,
    CartPage,
    MyPage,
    ScrollDirective
  ],
  imports: [
    IonicModule.forRoot(MyApp, {}, {
      links: [
        { component: HomePage, name: 'Home', segment: 'home' },
        { component: GoodsDetailComponent, name: 'Goods', segment: 'goods' }
      ]
    }),
    ComponentsModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    DashboardPage,
    StorePage,
    CartPage,
    MyPage
  ],
  providers: [{ provide: ErrorHandler, useClass: IonicErrorHandler }]
})
export class AppModule { }
