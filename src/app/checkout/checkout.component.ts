import { Component, OnInit } from '@angular/core';
import { HoneyService } from '../honey.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {
  cart: any[] = [];
  subtotal: number = 0;
  salesTax: number = 0;
  total: number = 0;
  state: string = "";
  stateSubmission: boolean = false;
  emailSignup: boolean = false;
  signUpText: string = "Sign up for Bee Way sales and news"

  constructor(private honeyService: HoneyService) { }

  ngOnInit(): void {
    this.cart = this.honeyService.getAndSetCart();
    this.subtotal = this.honeyService.getAndSetTotal();
  }

  deleteFromCart = (item: any): void => {
    this.honeyService.deleteItemFromCart(item);
    this.subtotal = this.honeyService.getAndSetTotal();
    this.cart = this.honeyService.getAndSetCart();
  }

  addAnotherToCart = (item: any): void => {
    this.honeyService.addAnotherItemToCart(item);
    this.subtotal = this.honeyService.getAndSetTotal();
    this.cart = this.honeyService.getAndSetCart();
  }

  stateSubmit = (stateForm: any): void => {
    this.stateSubmission = true;
    this.state = stateForm.form.value.state;
    if (this.state === "MI") {
      this.salesTax = .06;
    }
    this.total = this.subtotal * this.salesTax + this.subtotal;
  }

  emailSignUpInput = (emailForm: any): void => {
    this.emailSignup = !this.emailSignup;
    if (this.emailSignup === true) {
      this.signUpText = "You are signed up!"
    } else {
      this.signUpText = "Sign up for Bee Way sales and news"
    }
  }


}
