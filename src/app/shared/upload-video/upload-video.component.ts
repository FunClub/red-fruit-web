import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Subscription} from 'rxjs/Subscription';
import {SharedService} from '../../core/service/shared.service';

@Component({
  selector: 'app-upload-video',
  templateUrl: './upload-video.component.html',
  styleUrls: ['./upload-video.component.css']
})
export class UploadVideoComponent implements OnInit {

  /**
   * 上传订阅
   */
  uploadSubscribe:Subscription;

  /**
   * 视频 src
   */
  @Input()
  videoSrc:string;

  /**
   * 上传视频关闭官话通知
   * @type {EventEmitter<boolean>}
   */
  @Output()
  closeUploadVideo:EventEmitter<boolean> = new EventEmitter<boolean>();

  /**
   * 视频变化通知
   * @type {EventEmitter<string>}
   */
  @Output()
  videoChange:EventEmitter<string> = new EventEmitter<string>();

  constructor(private shareService:SharedService,) {

  }

  ngOnInit() {
  }

  /**
   * 关闭视频上传
   */
  close(){
    this.closeUploadVideo.emit();
  }

  /**
   * 上传视频
   * @param event
   */
  upload(event){
    let formData = new FormData();
    let files = event.target.files;

    for(let file of files){
      formData.append("file",file);
    }
    this.uploadSubscribe=this.shareService.upload("mood",formData).subscribe(res=>{
      this.videoSrc=res.data[0];
      this.videoChange.emit(this.videoSrc);
    });
  }
  /**
   * 删除指定图片,并更新心情服务的待上传图片数据
   * @param index
   */
  delete(){
    let paths = [this.videoSrc];
    this.uploadSubscribe=this.shareService.delete(paths).subscribe(res=>{
      if(res){
        this.videoSrc = undefined;
        this.videoChange.emit(this.videoSrc);
      }
    });
  }
}
