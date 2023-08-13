import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, ParamMap} from "@angular/router";
import {DictionaryServiceService} from "../dictionary-service.service";
import {DomSanitizer} from "@angular/platform-browser";
import {Iword} from "../iword";

@Component({
  selector: 'app-dictionary-detail',
  templateUrl: './dictionary-detail.component.html',
  styleUrls: ['./dictionary-detail.component.css']
})
export class DictionaryDetailComponent implements OnInit {
 word: Iword;
  constructor(public activatedRoute: ActivatedRoute,
              private dictionaryServiceService: DictionaryServiceService,
              private domSanitizer: DomSanitizer ) { }
  ngOnInit() {
    this.activatedRoute.paramMap.subscribe((paramMap: ParamMap) => {
      const id = paramMap.get('id');
      this.word = this.dictionaryServiceService.findSongById(parseInt(id));
      console.log(id);
      console.log(this.word);
    });
  }



}
