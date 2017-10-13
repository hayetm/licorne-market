import {Component, Input, Output, EventEmitter} from '@angular/core';
import {MatSnackBar} from '@angular/material';
import { ShopComponent } from '../shop/shop.component';

@Component({
  selector: 'snack-bar',
  templateUrl: 'snack-bar.component.html',
})
export class SnackBarComponent {
  @Input() productName: string;
  constructor(public snackBar: MatSnackBar) {}

  openSnackBar(productName: string) {
    this.snackBar.open(productName, null, {
      duration: 1000,
    });
  }
}
