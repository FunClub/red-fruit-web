import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {HabitArg} from '../../core/data/app.data';

@Component({
  selector: 'app-living-habit',
  templateUrl: './living-habit.component.html',
  styleUrls: ['./living-habit.component.css']
})
export class LivingHabitComponent{

  @Input()
  habitArg:HabitArg;
  constructor() {

  }

  ngOnInit() {

  }
  top(){

  }
}
