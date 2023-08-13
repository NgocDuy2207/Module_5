import { Component, OnInit } from '@angular/core';
import {Iword} from "../iword";
import {DictionaryServiceService} from "../dictionary-service.service";

@Component({
  selector: 'app-dictionay-page-component',
  templateUrl: './dictionay-page-component.component.html',
  styleUrls: ['./dictionay-page-component.component.css']
})
export class DictionayPageComponentComponent implements OnInit {
  words: Iword [] = [];

  constructor(private dictionaryServiceService: DictionaryServiceService) { }

  ngOnInit() {
    this.getALl();
  }
  getALl() {
    this.words = this.dictionaryServiceService.getAll();
  }

}
