import {AfterViewInit, Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialog} from '@angular/material';
import {MoodInfo} from '../../core/data/dto/mood.data';
import {RfEditorOptions, ShowMoodImg, TrendArgs, TrendNoticeType, TrendType} from '../../core/data/app.data';
import {animate, keyframes, style, transition, trigger} from '@angular/animations';
import {HomeService} from '../../core/service/home.service';
import {InsertParentDiscussion} from '../../core/data/discussion/discussion';
import {SharedService} from '../../core/service/shared.service';
declare var $:any;
@Component({
  selector: 'app-mood-detail',
  templateUrl: './mood-detail.component.html',
  styleUrls: ['./mood-detail.component.css'],
  animations:[
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
  ]
})
export class MoodDetailComponent implements OnInit{

  /**
   * 是否显示详细大图
   * @type {boolean}
   */
  showImgDetail:boolean=false;

  /**
   * 图片收缩时显示的小图路径数组
   */
  smallMoodImgs:string[]=[];

  /**
   * 图片展开时显示的小图路径数组
   */
  smallDetailImgs:any[]=[];

  /**
   * 图片原始格式路径数组
   */
  orPath:string[]=[];

  /**
   * 当前显示的大图路径
   */
  currentShowImgPath:string;

  /**
   * 当前显示图片的宽度，
   * 用于判断显示不同类型的图片光标
   */
  currentShowImgWidth:number;

  /**
   * 当前显示图片的索引
   * 用于通过数组下标切换显示图片
   */
  currentShowImgIndex:number;

  /**
   * 当前图片的光标类型
   */
  currentImgCursorType:number;

  constructor(@Inject(MAT_DIALOG_DATA) public mood:MoodInfo,public moodOption:ShowMoodImg,private dialog:MatDialog,
              public homeService:HomeService
              ) {

  }

  ngOnInit() {
    this.orPath=[];
    for(let path of this.mood.imgs){
      this.orPath.push(path)
    }

    for(let smallMoodImg of this.orPath){
      this.smallMoodImgs.push(smallMoodImg);
    }

    for(let smallDetailImg of this.orPath){
      let obj={
        path:smallDetailImg,
        active:false
      };
      this.smallDetailImgs.push(obj);
    }
  }

  /**
   * 鼠标在当前图片移动时改变图片的光标类型
   * @param event 鼠标事件
   * @param img 当前显示的图片
   */
  changeImgCursor(event:MouseEvent,img:HTMLImageElement){
    this.currentShowImgWidth=img.naturalWidth;
    this.currentImgCursorType=this.getCursorType(event);
  }

  /**
   * 计算当前光标应该是什么类型
   * @param event 鼠标事件
   * @returns {number} 光标类型
   */
  getCursorType(event:MouseEvent):number{
    let x = event.offsetX;
    let preMax=(this.currentShowImgWidth/2)-this.currentShowImgWidth/5;
    let nextMin=(this.currentShowImgWidth/2)+this.currentShowImgWidth/5;
    if(preMax>x){
      if(this.currentShowImgIndex==0)return this.moodOption.SIMPLE_CURSOR;
      return this.moodOption.PREV_CURSOR;
    }else if(nextMin<x){
      if(this.currentShowImgIndex==this.orPath.length-1)return this.moodOption.SIMPLE_CURSOR;
      return this.moodOption.NEXT_CURSOR;
    }else{
      return this.moodOption.ZOOM_OUT_CURSOR;
    }
  }

  /**
   * 切换当前显示的图片
   * @param event
   */
  changeDetailImg(event:MouseEvent){
    if(this.getCursorType(event)!=this.moodOption.SIMPLE_CURSOR){
      if(this.currentImgCursorType==this.moodOption.PREV_CURSOR){
        this.smallDetailImgs[this.currentShowImgIndex].active=false;
        this.currentShowImgIndex--;
        this.currentShowImgPath=this.orPath[this.currentShowImgIndex];
        this.smallDetailImgs[this.currentShowImgIndex].active=true;
      }else if(this.getCursorType(event)==this.moodOption.ZOOM_OUT_CURSOR){
        this.showImgDetail=false;
      }else if(this.getCursorType(event)==this.moodOption.NEXT_CURSOR){
        this.smallDetailImgs[this.currentShowImgIndex].active=false;
        this.currentShowImgIndex++;
        this.currentShowImgPath=this.orPath[this.currentShowImgIndex];
        this.smallDetailImgs[this.currentShowImgIndex].active=true;
      }
    }

  }

  /**
   * 点击详细小图片时的图片切换
   * @param index
   */
  changeSmallDetailImg(index){
    if(!this.smallDetailImgs[index].active){
      this.currentShowImgIndex=index;
      this.currentShowImgPath=this.orPath[index];
      this.smallDetailImgs[index].active=true;
      for(let i=0;i< this.smallDetailImgs.length;i++){
        if(i!=index){
          this.smallDetailImgs[i].active=false;
        }
      }
    }
  }

  /**
   * 显示详细图片
   * @param index 进入详细图片之前的图片索引
   */
  showDetailImg(index){
    this.currentShowImgIndex=index;
    this.showImgDetail=true;
    this.currentShowImgPath=this.orPath[index];
    this.changeSmallDetailImg(index);
  }


}
