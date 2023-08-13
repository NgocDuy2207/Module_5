import { Injectable } from '@angular/core';
import {Iword} from "./iword";

@Injectable({
  providedIn: 'root'
})
export class DictionaryServiceService {
  words: Iword[] = [
    {id: 1, word: 'hello', mean: 'xin chao'},
    {id: 2, word: 'cat', mean: 'con meo'},
    {id: 3, word: 'dog', mean: 'con cho'},
    {id:4, word: 'pig', mean: 'con heo'},
    {id: 5, word: 'dophin', mean: 'con ca heo'}
  ];

  constructor() { }
  getAll() {
    return this.words;
  }

  findSongById(id: number) {
    // @ts-ignore
    return this.words.find(item => item.id == id);
  }
}
