import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatGridListModule,MatSnackBarModule} from '@angular/material';

import { ShopComponent } from '../shop/shop.component';
import { SnackBarComponent } from '../snack-bar/snack-bar.component';

@NgModule({
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    MatGridListModule,
    MatSnackBarModule
  ],
  declarations: [
    ShopComponent,
    SnackBarComponent
  ],
  exports: [
    ShopComponent,
    SnackBarComponent
  ]
})
export class CommunicationModule { }
