import { Component, OnInit } from '@angular/core';
import { HoneyService } from '../honey.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {
  productsForSale: any[] = [];
  cart: any[] = [];

  constructor(private honeyService: HoneyService) { }

  ngOnInit(): void {
    this.cart = this.honeyService.getAndSetCart();
    this.productsForSale = this.honeyService.getAndSetProducts();
  }

  addToCart = (item: any): void => {
    this.honeyService.addToServiceCart(item);
  }


}
