import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { CommunicationModule } from './communication/communication.module';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';


import {MatButtonModule,MatMenuModule,MatGridListModule,MatSnackBarModule} from '@angular/material';

import { AppComponent } from './app.component';

import { ShopComponent } from './shop/shop.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatMenuModule,
    CommunicationModule,
    MatGridListModule,
    MatSnackBarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
