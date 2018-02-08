import { Component, OnInit } from '@angular/core';
import {animate, keyframes, state, style, transition, trigger} from "@angular/animations";
@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css'],
  animations: [
    trigger('flyXInOutFromTop', [
      transition('void => *', [
        animate("300ms",keyframes([
          style({opacity: 0, transform: 'translateY(-5%)', offset: 0}),
          style({opacity: 0.5, transform: 'translateY(5px)',  offset: 0.3}),
          style({opacity: 1, transform: 'translateY(0)',     offset: 1.0})
        ]))
      ]),
      transition('* => void', [
        animate("300ms",keyframes([
          style({opacity: 1, transform: 'translateY(0)'}),
          style({opacity: 0.5, transform: 'translateY(5px)'}),
          style({opacity: 0, transform: 'translateY(-5%)'})
        ]))
      ])
    ]),
    trigger('flyXInOutFromRight', [
      transition('void => *', [
        animate("1500ms",keyframes([
          style({opacity: 0, transform: 'translateX(5%)', offset: 0}),
          style({opacity: 0.5, transform: 'translateX(5px)',  offset: 0.3}),
          style({opacity: 1, transform: 'translateX(0)',     offset: 1.0})
        ]))
      ]),

    ]),
  ]
})
export class ChatComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
