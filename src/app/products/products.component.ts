import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { HoneyService } from '../honey.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  oneOzSelected: boolean = true;

  @Input() productsRef: any[] = [];
  @Input() itemRef: any;
  @Output() newCartItemEvent = new EventEmitter<any>();
  constructor() { }

  ngOnInit(): void {
  }

  emitCartItem = (item: any): void => {
    this.newCartItemEvent.emit(item);
    console.log(item);
  }

  toggleSizeSelection = (): void => {
    this.oneOzSelected = !this.oneOzSelected;
  }

}
