import { Component } from '@angular/core';

import {MatSnackBar} from '@angular/material';


export class Item {

  price: number;
  name: string;
  img: string;
}

const ITEMS : Item[] = [
  {price: 50, name: 'Boite Magique', img:'../assets/images/box_poil.png'},
  {price: 80, name: 'Boite Malefique', img:'../assets/images/box_poil.png'},
  {price: 80, name: 'Boite à poil', img:'../assets/images/box_poil.png'},
  {price: 40, name: 'La Barry White', img:'../assets/images/box_poil.png'},
  {price: 30, name: 'La tuveuxfaireladush', img:'../assets/images/box_poil.png'},
  {price: 120, name: 'Ultimate Box', img:'../assets/images/box_poil.png'},
]


@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.scss']
})

export class ShopComponent {

  items = ITEMS;
  selectedItem : Item;

  onSelect (item: Item) : void {
    this.selectedItem = item;
}
}
