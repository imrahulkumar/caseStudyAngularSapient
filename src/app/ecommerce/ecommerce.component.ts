import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ecommerce',
  templateUrl: './ecommerce.component.html',
  styleUrls: ['./ecommerce.component.scss'],
})
export class EcommerceComponent implements OnInit {
  products: any = [
    { productName: 'Electronics' },
    { productName: 'Electronics' },
    { productName: 'Electronics' },
    { productName: 'Electronics' },
    { productName: 'Electronics' },
    { productName: 'Electronics' },
    { productName: 'Electronics' },
    { productName: 'Electronics' },
    { productName: 'Electronics' },
    { productName: 'Electronics' },
    { productName: 'Electronics' },
    { productName: 'Electronics' },
    { productName: 'Electronics' },
    { productName: 'Electronics' },
    { productName: 'Electronics' },
    { productName: 'Electronics' },
    { productName: 'Electronics' },
    { productName: 'Electronics' },
    { productName: 'Electronics' },
    { productName: 'Electronics' },
    { productName: 'Electronics' },
    { productName: 'Electronics' },
    { productName: 'Electronics' },
    { productName: 'Electronics' },
    { productName: 'Electronics' }
  ];

  constructor() {}

  ngOnInit(): void {}
}
