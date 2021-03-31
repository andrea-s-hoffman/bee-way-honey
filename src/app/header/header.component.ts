import { Component, OnInit } from '@angular/core';
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
  quantity: number = 0;

  constructor(private honeyService: HoneyService) { }

  ngOnInit(): void {
    this.cart = this.honeyService.getAndSetCart();
    this.total = this.honeyService.getAndSetTotal();
    this.quantity = this.honeyService.getAndSetQty();
  }

  toggleShowCart = (): void => {
    this.showCart = !this.showCart;
    this.total = this.honeyService.getAndSetTotal();
  }


}
