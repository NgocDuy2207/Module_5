import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-create-service',
  templateUrl: './create-service.component.html',
  styleUrls: ['./create-service.component.css']
})
export class CreateServiceComponent implements OnInit {
  serviceForm: FormGroup;
  constructor() { }

  ngOnInit() {
    this.serviceForm = new FormGroup(
      {
        id: new FormControl('', [Validators.required, Validators.pattern(/^MDV-[0-9]{4}$/)]),
        name: new FormControl('', [Validators.required]),
        area: new FormControl('', [Validators.required]),
        maxPeoPle: new FormControl('', [Validators.required]),
        cost: new FormControl('', [Validators.required]),
        rent_Type: new FormControl('', [Validators.required]),
        status: new FormControl('', [Validators.required, Validators.email])
      }
    );
  }

  onSubmit() {
    console.log(this.serviceForm);
  }
}
