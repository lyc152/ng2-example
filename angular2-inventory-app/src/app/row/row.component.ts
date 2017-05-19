import { Component, OnInit } from '@angular/core';
import { Product } from '../product.model';

@Component({
  selector: 'product-row',
  host: {'class': 'item'},
  inputs: ['product'],
  templateUrl: './row.component.html',
  styleUrls: ['./row.component.css']
})
export class RowComponent implements OnInit {
  product: Product;
  constructor() { }

  ngOnInit() {
  }

}
