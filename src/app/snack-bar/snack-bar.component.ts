import {Component, Input, Output, EventEmitter} from '@angular/core';
import {MatSnackBar} from '@angular/material';
import { ShopComponent } from '../shop/shop.component';
import { SessionService } from '../session.service';

@Component({
  selector: 'snack-bar',
  templateUrl: 'snack-bar.component.html',
})
export class SnackBarComponent {
  @Input() productName: string;
  // @Output() signalSnack = new EventEmitter<string> ();

  constructor(public snackBar: MatSnackBar, private sessionService: SessionService) {}

  openSnackBar(productName: string) {

    this.sessionService.addToCart(productName);

    this.snackBar.open(productName + " a été ajouté au panier", null, {
      duration: 1000,
    });

  }
}
