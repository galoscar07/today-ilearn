import { Component, OnInit } from '@angular/core';
import {getLocaleDateFormat} from '@angular/common';

@Component({
  selector: 'app-new-componenet',
  templateUrl: './new-componenet.component.html',
  styles: [`
    .moreThanFive {
      color: white;
    }
  `]
})
export class NewComponenetComponent implements OnInit {
  isParagraphSupposedToAppear = true;
  clickedArray = [];
  lengthArray = 0;

  constructor() {
  }

  ngOnInit() {
  }

  toggleParagraph() {
    this.isParagraphSupposedToAppear = !this.isParagraphSupposedToAppear;
    let currentDate = Date();
    this.clickedArray.push(currentDate);
    this.lengthArray++;
  }

  getColor() {
    return this.clickedArray.length > 5 ? 'blue' : 'white';
  }

}
