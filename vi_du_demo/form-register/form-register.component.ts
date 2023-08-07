import { Component, OnInit, ViewChild, ElementRef  } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';

// tslint:disable-next-line:class-name
class country implements ICountry {
  id: string;
  name: string;
  constructor(id: string, name: string) {
    this.id = id;
    this.name = name;
  }
}

// @ts-ignore
@Component({
  selector: 'app-form-register',
  templateUrl: './form-register.component.html',
  styleUrls: ['./form-register.component.css']
})
export class FormRegisterComponent implements OnInit {
  constructor() {
  }

  get email() {
    return this.contactForm.get('email');
  }
  get age() {
    return this.contactForm.get('age');
  }
  get phone() {
    return this.contactForm.get('phone');
  }
// @ts-ignore
  contactForm = new FormGroup();
  countryList: country [] = [
    new country('1', 'Indian'),
    new country('2', 'ChiNa'),
    new country('3', 'VietNam')
  ];
  ngOnInit() {
    this.contactForm = new FormGroup({
      email: new FormControl('', [Validators.email, Validators.required]),
      country: new FormControl('', [Validators.required]),
      age: new FormControl('', [Validators.required, Validators.minLength(18)]),
      gender: new FormControl('', Validators.required),
      phone: new FormControl('', [Validators.required, Validators.pattern('/^\\+84\\d{9,10}$/')]),
      password: new FormControl('', Validators.required),
      confirmPassword: new FormControl('', Validators.required)
    });
  }

  onSubmit() {
    console.log(this.contactForm.value);
  }

}

