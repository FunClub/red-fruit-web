import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {RfEditorOptions} from '../../core/data/app.data';
import {Mood, MoodInfo} from '../../core/data/dto/mood.data';
import {MoodService} from '../../core/service/mood.service';
import {ToastsManager} from 'ng2-toastr';

@Component({
  selector: 'app-mood-editor',
  templateUrl: './mood-editor.component.html',
  styleUrls: ['./mood-editor.component.css']
})
export class MoodEditorComponent implements OnInit {
  /**
   * 编辑器配置
   */
  rfOptions:RfEditorOptions;

  /**
   * 表情是否被打开
   */
  faceOpened:boolean;

  /**
   * 上传图片是否被打开
   */
  uploadImgOpened:boolean;

  /**
   * 上传视频是否被打开
   */
  uploadVideoOpened:boolean;

  /**
   * 上传的图片
   */
  uploadImgs:string[]=[];

  /**
   * 上传的视频
   */
  videoSrc:string;

  /**
   *
   */
  mood:Mood;

  /**
   * 心情发布事件，通知父组件更新心情列表
   */
  @Output()
  moodSend:EventEmitter<MoodInfo>;
  constructor(private moodService:MoodService,private toasts:ToastsManager) {
    this.rfOptions = new RfEditorOptions();
    this.rfOptions.height=80;
    this.mood = new Mood();
    this.moodSend = new EventEmitter<MoodInfo>();
  }
  ngOnInit() {

  }

  /**
   * 发布心情
   */
  send(){
    //装配数据
    this.mood.imgs = this.uploadImgs;
    this.mood.video = this.videoSrc;
    this.moodService.create(this.mood).subscribe(res=>{
      if(res.data){
        //重置数据
        this.mood.content = "";
        this.mood.imgs = [];
        this.mood.video = "";
        this.moodSend.emit(res.data);
        this.toasts.success("心情发布成功");
      }else{
        this.toasts.error("心情发布失败！请重试...");
      }
    });
  }
  /**
   * 改变可见性
   * @param isPrivate
   */
  changePrivate(isPrivate){
    this.mood.isPrivate = isPrivate;
  }
  /**
   * 上传视频文件变化
   * @param {string} src
   */
  videoChange(src:string){
    this.videoSrc = src;
  }
  /**
   * 上传图片文件变化
   * @param {string[]} imgs
   */
  imgChanged(imgs:string[]){
    this.uploadImgs = imgs;
  }

  /**
   * 视频切换
   */
  toggleUploadVideo(){
    this.uploadVideoOpened = !this.uploadVideoOpened;
  }
  /**
   * 表情切换
   */
  toggleFace(){
    this.faceOpened = !this.faceOpened;
  }

  /**
   * 图片上传切换
   */
  toggleUploadImg(){
    this.uploadImgOpened = !this.uploadImgOpened;
  }

  /**
   * 表情追加
   * @param {string} face
   */
  appendFace(face:string){
    this.mood.content += face;
  }
}
