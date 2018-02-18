import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {SharedService} from '../../core/service/shared.service';



@Component({
  selector: 'app-upload-img',
  templateUrl: './upload-img.component.html',
  styleUrls: ['./upload-img.component.css']
})
export class UploadImgComponent implements OnInit {

  /**
   * 通知父元素关闭本组件
   * @type {EventEmitter<boolean>}
   */
  @Output()
  closeUploadImg=new EventEmitter<boolean>();

  /**
   * 文件变化通知
   * @type {EventEmitter<string[]>}
   */
  @Output()
  imgChanged=new EventEmitter<string[]>();

  /**
   * 从父组件传来图片地址数据，用于关闭本组件后,再次打开依旧显示图片
   * @type {Array}
   */
  @Input()
  uploadImgs:string[]=[];

  /**
   * 上传图片的订阅,用于显示操作提示
   */
  uploadSubscribe;

  /**
   * 删除图片的订阅,用于显示操作提示
   */
  deleteSubscribe;

  constructor(private sharedService:SharedService) { }

  ngOnInit() {

  }


  /**
   * 上传图片
   * 最多上传8张,并更新心情服务的待上传图片数据
   * @param event 文件上传事件
   */
  upload(event){
    let formData = new FormData();
    let files = event.target.files;
    let count=this.uploadImgs.length;
    for(let file of files){
      if(count==8){break;}
      formData.append("file",file);
      count++;
    }
    this.uploadSubscribe=this.sharedService.upload("mood",formData).subscribe(res=>{
      this.uploadImgs= this.uploadImgs.concat(res.data);
      this.imgChanged.emit(this.uploadImgs);
    });
  }

  /**
   * 删除指定图片,并更新心情服务的待上传图片数据
   * @param index
   */
  deleteMoodImg(index:number){
    let paths=[this.uploadImgs[index]];
    this.deleteSubscribe=this.sharedService.delete(paths).subscribe(res=>{
      if(res){
        this.uploadImgs.splice(index,1);
        this.imgChanged.emit(this.uploadImgs);
      }
    });
  }


  /**
   * 关闭本组件
   */
  close(){
    this.closeUploadImg.emit();
  }
}
