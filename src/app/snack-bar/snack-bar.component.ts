import {Component, Input} from '@angular/core';
import {MatSnackBar} from '@angular/material';
import { ShopComponent } from '../shop/shop.component';

@Component({
  selector: 'snack-bar',
  templateUrl: 'snack-bar.component.html',
})
export class SnackBarComponent {
  constructor(public snackBar: MatSnackBar) {}

  openSnackBar() {
    this.snackBar.openFromComponent(InterieurSnack, {
      duration: 1000,
    });
  }
}


@Component({
  selector: 'interieur-snack',
  templateUrl: 'interieur-snack.html',
})
export class InterieurSnack {
  @Input() shop: ShopComponent;
  @Input('master') masterName: string;
}
