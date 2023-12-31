import { Component, OnInit } from '@angular/core';
import {ProductService} from '../../service/product.service';
import {Product} from '../../model/product';
@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  products: Product [] = [];
  p = 1;
  msg = false;

  constructor(private productService: ProductService) { }

  ngOnInit() {
    this.getALl();
  }
  getALl() {
    this.productService.getAll().subscribe(data => {
      this.products = data;
    });
  }


}
