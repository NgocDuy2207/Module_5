import { Component, OnInit } from '@angular/core';
import {ProductService} from '../../service/product.service';
import {ActivatedRoute, ParamMap, Router} from '@angular/router';
import {ProductTypeServiceService} from '../../service/serviceProductType/product-type-service.service';
import {ProductType} from '../../model/product-type';
import {FormControl, FormGroup} from '@angular/forms';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.css']
})
export class ProductEditComponent implements OnInit {
  id: number;
  productType: ProductType [];
  productFrom: FormGroup = new FormGroup({
    name: new FormControl(),
    productType: new FormControl(),
    price: new FormControl(),
    date: new FormControl()
  });


  constructor(private productService: ProductService,
              private activeRouter: ActivatedRoute,
              private productTypeService: ProductTypeServiceService,
              private router: Router) {
    this.activeRouter.paramMap.subscribe((paramMap: ParamMap) => {
      this.id = +paramMap.get('id');
      // this.updateCustomer(this.id);
    });
  }

  ngOnInit(): void {
        this.productService.findById(this.id).subscribe(product => {
          this.productFrom = new FormGroup({
            id: new FormControl(product.id),
            productType: new FormControl(product.productType),
            name: new FormControl(product.name),
            price: new FormControl(product.price),
            date: new FormControl(product.date)
          });
        });
        this.getAllType();
  }
  getAllType() {
    this.productTypeService.getAll().subscribe(type => {
      this.productType = type;
    });
  }
  // updateCustomer(id: number) {
  //   const product = this.productFrom.value;
  //   this.productTypeService.findById(product.productType).subscribe(data => {
  //     product.typeCustomer = data;
  //     this.productService.editProduct(id, product).subscribe(() => {
  //       Swal.fire({
  //         position: 'top-end',
  //         icon: 'success',
  //         title: 'Update thành công',
  //         showConfirmButton: false,
  //         timer: 1500
  //       });
  //       this.router.navigateByUrl('/products');
  //     });
  //   });
  // }
  updateCustomer(id: number) {
    const product = this.productFrom.value;
    this.productService.editProduct(id, product).subscribe(() => {
      Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'update thành công',
        showConfirmButton: false,
        timer: 1500
      });
      this.router.navigateByUrl('products');
    });
  }
}
