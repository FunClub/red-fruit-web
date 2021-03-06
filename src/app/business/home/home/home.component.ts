import { Component, OnInit } from '@angular/core';
import {animate, keyframes, style, transition, trigger} from '@angular/animations';
import {HomeService} from '../../../core/service/home.service';
import {SharedService} from '../../../core/service/shared.service';
import {MatDialog} from '@angular/material';
import {MoodEditorComponent} from '../../../shared/mood-editor/mood-editor.component';

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

  centerLink:string;
  constructor(public homeService:HomeService,public sharedService:SharedService,
              private dialog:MatDialog
              ) {

  }

  ngOnInit() {
    this.homeService.getTitleUserInfo().subscribe(res=>{
      this.centerLink = 'center/'+this.homeService.titleUser.userId;
    })
  }
  openMood(){
    let left = (window.innerWidth-590)/2;
    this.dialog.open(MoodEditorComponent,{
      position:{
        top:'150px',
        left:left+'px'
      }
    });
  }
  toggleChat(){
    this.showChat=!this.showChat;
  }
}
