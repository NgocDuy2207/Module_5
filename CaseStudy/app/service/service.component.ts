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
    {id: 1, name: 'Villa', area : 10, numberFloor : 6,
      maxPeoPle: 100, cost: 10000000, rent_Type: 'day', status: true}
  ];
  ngOnInit() {
  }
}
