import { Component, OnInit } from '@angular/core';
import {IService} from '../model/IService';

@Component({
  selector: 'app-service',
  templateUrl: './service.component.html',
  styleUrls: ['./service.component.css']
})
export class ServiceComponent implements OnInit {

  constructor() { }
  services: IService [] = [
    {id: 1, name: 'Villa', area : 11, numberFloor : 6,
      maxPeoPle: 100, cost: 10000000, rent_Type: 'day', status: true},
    {id: 1, name: 'House', area : 12, numberFloor : 7,
      maxPeoPle: 100, cost: 10000000, rent_Type: 'day', status: true},
    {id: 1, name: 'Resort', area : 13, numberFloor : 8,
      maxPeoPle: 100, cost: 10000000, rent_Type: 'day', status: true}
  ];
  ngOnInit() {
  }
}
