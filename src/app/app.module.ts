import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';


import {MatButtonModule,MatMenuModule,MatGridListModule,MatSnackBarModule} from '@angular/material';

import { AppComponent } from './app.component';

import { ShopComponent } from './shop/shop.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';

import { SnackBarComponent } from './snack-bar/snack-bar.component';
import { InterieurSnack } from './snack-bar/snack-bar.component';


@NgModule({
  declarations: [
    AppComponent,
    ShopComponent,
    HeaderComponent,
    FooterComponent,
    SnackBarComponent,
    InterieurSnack
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatMenuModule,
    MatGridListModule,
    MatSnackBarModule
  ],
  providers: [],
  bootstrap: [AppComponent, InterieurSnack]
})
export class AppModule { }
