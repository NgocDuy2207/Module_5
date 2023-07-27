import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent implements OnInit {
  show: string = "";
  constructor() { }

  ngOnInit() {

  }

  disPlay(s: string) {
    this.show += s;

  }

  clearDisplay() {
    this.show ="";
  }

  calculate() {
    try {
      this.show = eval(this.show);
    }catch (e) {
      this.show = "lỗi cứ pháp"
    }
  }
}
