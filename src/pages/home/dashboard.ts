import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';


@Component({
    templateUrl: 'dashboard.html'
})
export class DashboardPage {

    banner: any[];
    cell: any[];
    ad: any[];

    isAndroid: boolean = false;

    constructor(platform: Platform) {
        this.isAndroid = platform.is('android');
        this.banner = ['assets/img/banner.jpg', 'assets/img/banner.jpg', 'assets/img/banner.jpg'];
        this.cell = ['cell', 'cell', 'cell', 'cell'];
        this.ad = ['assets/img/ad.png', 'assets/img/ad.png', 'assets/img/ad.png'];
    }
}