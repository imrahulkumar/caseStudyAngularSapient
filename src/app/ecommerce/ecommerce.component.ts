import { Component, OnInit } from '@angular/core';
import { productArray } from '../sharedContent/staticData';

@Component({
  selector: 'app-ecommerce',
  templateUrl: './ecommerce.component.html',
  styleUrls: ['./ecommerce.component.scss'],
})
export class EcommerceComponent implements OnInit {
  productArr: any = productArray;
  sortProductArr: any = [];

  isView: string = 'grid';
  order: string = 'ascending';

  constructor() {}

  ngOnInit(): void {
    this.sortChange();
  }

  sortChange(): void {
    this.sortProductArr = this.sortChangeTranslator();
  }

  sortChangeTranslator(): void {
    if (this.order === 'ascending')
      return this.productArr.sort(
        (a: any, b: any) =>
          parseFloat(a.productPrice) - parseFloat(b.productPrice)
      );
    else
      return this.productArr.sort(
        (a: any, b: any) =>
          parseFloat(b.productPrice) - parseFloat(a.productPrice)
      );
  }
}
