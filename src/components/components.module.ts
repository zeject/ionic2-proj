import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from 'ionic-angular';
import { BannerComponent } from './banner/banner';
import { HomeCellComponent } from './home-cell/home-cell';
import { ProductListComponent } from './product-list/product-list';
import { ProductItemComponent } from './product-item/product-item';
import { CartsComponent } from './carts/carts';
import { CartItemComponent } from './carts/cart-item/cart-item';
import { GoodsDetailComponent } from './goods-detail/goods-detail';

@NgModule({
    imports: [
        CommonModule,
        IonicModule
    ],
    exports: [
        BannerComponent,
        HomeCellComponent,
        ProductListComponent,
        ProductItemComponent,
        CartsComponent,
        CartItemComponent
    ],
    declarations: [
        BannerComponent,
        HomeCellComponent,
        ProductListComponent,
        ProductItemComponent,
        CartsComponent,
        CartItemComponent,
        GoodsDetailComponent
    ],
    entryComponents: [
        GoodsDetailComponent
    ],
    providers: []
})
export class ComponentsModule { }
