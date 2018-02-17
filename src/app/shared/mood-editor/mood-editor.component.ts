import { Component, OnInit } from '@angular/core';
import {RfEditorOptions} from '../../core/data/app.data';

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
  content:string="";
  constructor() {
    this.rfOptions = new RfEditorOptions();
  }

  toggleFace(){
    this.faceOpened = !this.faceOpened;
  }
  toggleUploadImg(){
    this.uploadImgOpened = !this.uploadImgOpened;
  }
  ngOnInit() {
  }
  appendFace(face:string){
    this.content += face;
  }
}
