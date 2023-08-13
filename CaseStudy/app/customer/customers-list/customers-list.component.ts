import { Component, OnInit } from '@angular/core';
import {ICustomers} from '../../model/icustomers';

@Component({
  selector: 'app-customers-list',
  templateUrl: './customers-list.component.html',
  styleUrls: ['./customers-list.component.css']
})
export class CustomersListComponent implements OnInit {

  constructor() { }
  customers: ICustomers [] = [
    {id: 1, idCustomer: 'KH-1', nameCustomer: 'Duy', dateCustomer: '22-09-1996', genderCustomer: 1,
      idCardCustomer: 123, phoneCustomer: '0903538872', emailCustomer: 'ngocduy40k02', typeCustomer: 'vip',
      addressCustomer: 'đa nang'
    }
  ];

  ngOnInit() {
  }

}
