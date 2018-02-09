import { Component, OnInit } from '@angular/core';
import {HabitArgs} from '../../../core/data/app.data';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.css']
})
export class InfoComponent implements OnInit {

  arg:HabitArgs;
  constructor() {
    this.arg = new HabitArgs();
    this.arg.labels=['不吃','微辣','辣'];
    this.arg.value=1;


  }

  ngOnInit() {

  }

}
