import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import gsap from 'gsap/all';
import { HoneyService } from '../honey.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']

})
export class HeaderComponent implements OnInit {
  cart: any[] = [];
  showCart: boolean = false;
  total: number = 0;
  quantity!: number;

  constructor(private honeyService: HoneyService) { }

  ngOnInit(): void {
    this.cart = this.honeyService.getAndSetCart();
    this.total = this.honeyService.getAndSetTotal();
  }

  toggleShowCart = (): void => {
    this.showCart = !this.showCart;
    this.total = this.honeyService.getAndSetTotal();
  }

  subtractFromCart = (item: any): void => {
    this.honeyService.minusItemFromCart(item);
    this.total = this.honeyService.getAndSetTotal();
    this.cart = this.honeyService.getAndSetCart();
  }

  addAnotherToCart = (item: any): void => {
    this.honeyService.addAnotherItemToCart(item);
    this.total = this.honeyService.getAndSetTotal();
    this.cart = this.honeyService.getAndSetCart();
  }

  deleteFromCart = (item: any): void => {
    this.honeyService.deleteFromCart(item);
    this.total = this.honeyService.getAndSetTotal();
    this.cart = this.honeyService.getAndSetCart();
  }


}
