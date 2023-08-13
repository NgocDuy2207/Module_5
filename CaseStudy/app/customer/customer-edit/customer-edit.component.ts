import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-customer-edit',
  templateUrl: './customer-edit.component.html',
  styleUrls: ['./customer-edit.component.css']
})
export class CustomerEditComponent implements OnInit {
  customer: FormGroup;
  constructor() { }

  ngOnInit() {
    this.customer = new FormGroup(
      {
        idCustomer: new FormControl('', Validators.required),
        nameCustomer: new FormControl('', [Validators.required, Validators.pattern(/^MKH-[0-9]{4}$/)]),
        dateCustomer: new FormControl('', [Validators.required]),
        genderCustomer: new FormControl('', [Validators.required]),
        idCardCustomer: new FormControl('', [Validators.required]),
        phoneCustomer: new FormControl('', [Validators.required]),
        emailCustomer: new FormControl('', [Validators.required]),
        typeCustomer: new FormControl('', [Validators.required]),
        addressCustomer: new FormControl('', [Validators.required])
      }
    );
  }

  onSubmit() {
    console.log(this.customer);
  }
}
