import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from 'ionic-angular';
import { BannerComponent } from './banner/banner';
import { HomeCellComponent } from './home-cell/home-cell';

@NgModule({
    imports: [
        CommonModule,
        IonicModule
    ],
    exports: [
        BannerComponent,
        HomeCellComponent
    ],
    declarations: [
        BannerComponent,
        HomeCellComponent
    ],
    providers: []
})
export class ComponentsModule { }
