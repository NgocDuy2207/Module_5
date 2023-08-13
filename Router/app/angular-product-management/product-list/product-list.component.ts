import { Component, OnInit } from '@angular/core';
import {ServiceService} from '../service/service.service';
import {Product} from '../Interface/product';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  products: Product [] = [];
  constructor(private service: ServiceService) { }

  ngOnInit() {
    this.getAll();
  }
  getAll() {
    this.products = this.service.getAll();
  }

}
