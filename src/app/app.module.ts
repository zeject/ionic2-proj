import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { DashboardPage } from '../pages/home/dashboard';
import { ComponentsModule } from '../components/components.module';
import { StorePage } from '../pages/store/store';
import { CartPage } from '../pages/cart/cart';
import { MyPage } from '../pages/my/my';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    DashboardPage,
    StorePage,
    CartPage,
    MyPage
  ],
  imports: [
    IonicModule.forRoot(MyApp),
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
