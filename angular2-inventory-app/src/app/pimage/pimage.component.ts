import { Component, OnInit } from '@angular/core';
import { Product } from '../product.model';

@Component({
  selector: 'product-image',
  host: {class: 'ui small image'},
  inputs: ['product'],
  templateUrl: './pimage.component.html',
  styleUrls: ['./pimage.component.css']
})
export class PimageComponent implements OnInit {
  product: Product;
  constructor() { }

  ngOnInit() {
  }

}
