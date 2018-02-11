import { Component, OnInit } from '@angular/core';
import {animate, keyframes, style, transition, trigger} from '@angular/animations';
import {HomeService} from '../../../core/service/home.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
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
        animate("300ms",keyframes([
          style({transform: 'translateX(5%)', offset: 0}),
          style({transform: 'translateX(5px)',  offset: 0.3}),
          style({transform: 'translateX(0)',     offset: 1.0})
        ]))
      ]),

    ]),
  ]
})
export class HomeComponent implements OnInit {
  /**
   * 是否显示聊天面板
   * @type {boolean}
   */
  showChat :boolean =false;
  constructor(public homeService:HomeService) {

  }

  ngOnInit() {
    this.homeService.getTitleUserInfo().subscribe()
  }

  toggleChat(){
    this.showChat=!this.showChat;
  }
}
