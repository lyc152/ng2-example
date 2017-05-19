import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'price-display',
  inputs: ['price'],
  templateUrl: './price.component.html',
  styleUrls: ['./price.component.css']
})
export class PriceComponent implements OnInit {
  price: number;
  constructor() { }

  ngOnInit() {
  }

}
