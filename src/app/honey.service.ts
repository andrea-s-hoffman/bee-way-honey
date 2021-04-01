import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HoneyService {
  cart: any[] = [
  ];
  productsForSale: any[] = [
    {
      product: "Propolis",
      image: "assets/IMG_1428.jpg",
      firstSize: "1 oz",
      firstSizePrice: 14.50,
      secondSize: "4 oz",
      secondSizePrice: 26.00,
      description: "Strengthen your immune system with the Queen Bee's very own defense. Add her elixcir to your oats or coffee for a royal boost every morning.",
      index: 0,
      quantity: 1
    },
    {
      product: "Clover Honey",
      image: "assets/IMG_1426.jpg",
      firstSize: "8 oz",
      firstSizePrice: 10.50,
      secondSize: "16 oz",
      secondSizePrice: 18.00,
      description: "Put it on your toast, in your smoothies and on your face. This stuff is as fresh as it gets from our very own Oregon-ruling matriarchies.",
      index: 1,
      quantity: 1
    },
    {
      product: "Honeycomb",
      image: "assets/IMG_1434.jpeg",
      firstSize: ".5 lb",
      firstSizePrice: 21.00,
      secondSize: "2 lb",
      secondSizePrice: 45.00,
      description: "Not just for the bears. These wafers make for the perfect pick-me-up on a hot summer's day. Or during your winter hibernation... we don't judge.",
      index: 2,
      quantity: 1
    }
  ];
  totalDue: number = 0;
  totalQuantity: number = 0;

  constructor() { }

  getAndSetCart = (): any[] => {
    return this.cart;
  }

  getAndSetProducts = (): any[] => {
    return this.productsForSale;
  }

  getAndSetTotal = (): number => {
    return this.totalDue;
  }

  getAndSetQty = (): number => {
    return this.totalQuantity;
  }

  addToServiceCart = (item: any): void => {
    if (!this.cart.includes(item)) {
      this.cart.push(item);
      console.log(this.cart);

    } else {
      item.quantity++;
      console.log(item.quantity);
    }
    let price = item.firstSizePrice;
    this.totalDue += price;
    this.totalQuantity++;
  }

}
