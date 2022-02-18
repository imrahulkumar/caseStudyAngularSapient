import { Component, OnInit } from '@angular/core';
import { DynamicTableService } from './dynamic-table.service';

@Component({
  selector: 'app-dynamic-table',
  templateUrl: './dynamic-table.component.html',
  styleUrls: ['./dynamic-table.component.scss'],
})
export class DynamicTableComponent implements OnInit {
  constructor(private readonly dynamicTableService: DynamicTableService) {}

  productArr: any = [];
  originalArr: any = [];

  productHeaderArr = [
    { title: 'Product', field: 'title' },
    { title: 'Discount', field: 'discountPercentage' },
    { title: 'Price', field: 'price' },
    { title: 'Rating', field: 'rating' },
    { title: 'Stock', field: 'stock' },
  ];

  colSort: any = {
    selectedCol: '',
    isOrder: '',
  };

  ngOnInit(): void {
    this.getProductList();
  }

  getProductList(): void {
    this.dynamicTableService.getProduct().subscribe((response: any) => {
      console.log('Response', response);
      this.originalArr = response.products;
      this.productArr = [...this.originalArr];
    });
  }

  colSorting(item: any): void {
    if (item.field === this.colSort.selectedCol) {
      if (this.colSort.isOrder === 'asc') {
        this.colSort.isOrder = 'desc';
        // trigger api call for desc
        this.translateArray();
      } else if (this.colSort.isOrder === 'desc') {
        this.colSort.isOrder = '';
        this.colSort.selectedCol = '';
        // trigger api call for original
        this.productArr = [...this.originalArr];
      }
    } else {
      this.colSort.selectedCol = item.field;
      this.colSort.isOrder = 'asc';
      // trigger api call for asc
      this.translateArray();
    }
  }

  translateArray(): void {
    this.productArr = this.translateOrder(this.colSort.selectedCol);
  }

  translateOrder(key: string): any[] {
    if (this.colSort.isOrder === 'asc')
      return this.productArr.sort(
        (a: any, b: any) => parseFloat(a[key]) - parseFloat(b[key])
      );
    else
      return this.productArr.sort(
        (a: any, b: any) => parseFloat(b[key]) - parseFloat(a[key])
      );
  }
}
