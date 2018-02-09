import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-charisma',
  templateUrl: './charisma.component.html',
  styleUrls: ['./charisma.component.css']
})
export class CharismaComponent implements OnInit {
  @Input()
  value:number;
  constructor() { }

  ngOnInit() {
  }

}
