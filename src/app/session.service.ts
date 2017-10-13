import { Injectable } from '@angular/core';

@Injectable()
export class SessionService {
  carts = [];
  constructor() { }

    addToCart(item: string) {
        console.log("hello");
        this.carts.push(item);
    }

    getCart () :string[] {
      return this.carts;
    }

}
