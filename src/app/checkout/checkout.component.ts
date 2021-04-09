import { formatCurrency } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { resetFakeAsyncZone } from '@angular/core/testing';
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
  signUpText: string = "Sign up for Bee Way sales and news";
  orderPlaced: boolean = false;
  fullName: string = "";
  lastFour: string = "";
  phone: string = "";
  email: string = "";
  addressOne: string = "";
  addressTwo: string = "";
  cityState: string = "";

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
    if (this.state === "AL" || this.state === "GA" || this.state === "NY" || this.state === "SD" || this.state === "WY") {
      this.salesTax = 4;
    } else if (this.state === "AR" || this.state === "KS" || this.state === "WA") {
      this.salesTax = 6.5;
    } else if (this.state === "AZ") {
      this.salesTax = 5.6;
    } else if (this.state === "CA") {
      this.salesTax = 7.25;
    } else if (this.state === "CO") {
      this.salesTax = 2.9;
    } else if (this.state === "CT") {
      this.salesTax = 6.35;
    } else if (this.state === "MI" || this.state === "DC" || this.state === "FL" || this.state === "ID" || this.state === "IA" || this.state === "KY" || this.state === "MD" || this.state === "PA" || this.state === "SC" || this.state === "VT" || this.state === "WV") {
      this.salesTax = 6;
    } else if (this.state === "HI") {
      this.salesTax = 4.12;
    } else if (this.state === "IL" || this.state === "MA" || this.state === "TX") {
      this.salesTax = 6.25;
    } else if (this.state === "IN" || this.state === "MS" || this.state === "RI" || this.state === "TN") {
      this.salesTax = 7;
    } else if (this.state === "LA") {
      this.salesTax = 4.45;
    } else if (this.state === "MN") {
      this.salesTax = 6.875;
    } else if (this.state === "MO") {
      this.salesTax = 4.225;
    } else if (this.state === "NC") {
      this.salesTax = 4.75;
    } else if (this.state === "NE") {
      this.salesTax = 5.5;
    } else if (this.state === "NJ") {
      this.salesTax = 6.625;
    } else if (this.state === "NM") {
      this.salesTax = 5.125;
    } else if (this.state === "ND") {
      this.salesTax = 6.85;
    } else if (this.state === "OH") {
      this.salesTax = 5.75;
    } else if (this.state === "OK") {
      this.salesTax = 4.5;
    } else if (this.state === "UT") {
      this.salesTax = 5.95;
    } else if (this.state === "VA") {
      this.salesTax = 5.3;
    } else if (this.state === "WI") {
      this.salesTax = 5;
    }
    let percentage = this.salesTax / 100;
    this.total = this.subtotal * percentage + this.subtotal + 5.99;
  }

  emailSignUpInput = (emailForm: any): void => {
    this.emailSignup = !this.emailSignup;
    if (this.emailSignup === true) {
      this.signUpText = "You are signed up!"
    } else {
      this.signUpText = "Sign up for Bee Way sales and news"
    }
  }

  onSubmit = (entireForm: any): void => {
    console.log(entireForm.form.value);
    let info = entireForm.form.value;
    this.orderPlaced = true;
    this.fullName = info.firstName + " " + info.lastName;
    this.lastFour = info.ccNumber.slice(info.ccNumber.length - 4);
    this.phone = info.phone;
    this.email = info.email;
    this.addressOne = info.street;
    this.addressTwo = info.streetTwo;
    this.cityState = info.city + ", " + info.state;
    entireForm.reset();

  }

  closePopup = () => {
    this.orderPlaced = false;
    this.honeyService.resetCart();
    this.cart = this.honeyService.getAndSetCart();
    this.total = this.honeyService.getAndSetTotal();
    this.subtotal = 0;
  }


}
