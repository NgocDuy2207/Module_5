import { Component, OnInit } from '@angular/core';
import {ProductService} from '../../service/product.service';
import {Router} from '@angular/router';
import {FormControl, FormGroup} from '@angular/forms';
// @ts-ignore
import Swal from 'sweetalert2';
import {ProductTypeServiceService} from '../../service/serviceProductType/product-type-service.service';
import {ProductType} from '../../model/product-type';

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.css']
})
export class ProductCreateComponent implements OnInit {
  productType: ProductType [];
  private currentId;
  productFrom: FormGroup = new FormGroup({
    name: new FormControl(),
    productType: new FormControl(),
    price: new FormControl(),
    date: new FormControl()
  });

  constructor(private productService: ProductService,
              private productTypeService: ProductTypeServiceService,
              private route: Router) { }

  ngOnInit(): void {
    this.productFrom = new FormGroup({
      name: new FormControl(),
      productType: new FormControl(),
      price: new FormControl(),
      date: new FormControl()
    });
    this.getAllType();
  }
  generateNewId(): number {
    const newId = this.currentId;
    this.currentId++;
    return newId;
  }
  submit() {
    const product = this.productFrom.value;
    product.id = this.generateNewId();
    this.productService.saveProduct(product).subscribe(() => {
      Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'Thêm mới thành công',
        showConfirmButton: false,
        timer: 1500
      });
      this.route.navigateByUrl('products');
    });
  }
  getAllType() {
    this.productTypeService.getAll().subscribe(type => {
      this.productType = type;
    });
  }
}
