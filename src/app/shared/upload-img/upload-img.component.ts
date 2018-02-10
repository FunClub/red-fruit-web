import {Component, OnInit, ViewChild} from '@angular/core';
import {ToastOptions, ToastsManager} from 'ng2-toastr';
import {ImageCropperComponent, CropperSettings} from 'ng2-img-cropper';
import {HomeService} from '../../core/service/home.service';
import {MatDialogRef} from '@angular/material';


@Component({
  selector: 'app-upload-img',
  templateUrl: './upload-img.component.html',
  styleUrls: ['./upload-img.component.css']
})
export class UploadImgComponent implements OnInit {


  @ViewChild('cropper', undefined)
  cropper:ImageCropperComponent;
  data: any;
  cropperSettings: CropperSettings;

  /**
   * 原始图像
   */
  originalProfile:string;

  constructor(private toastsManager:ToastsManager,
  private toastOptions:ToastOptions,private homeService:HomeService,
              private dialogRef:MatDialogRef<UploadImgComponent>

  ) {


  };
  ngOnInit(){
    this.data = {image:this.homeService.user.originalProfile};
    this.originalProfile = this.homeService.user.originalProfile;
    this.setUpCropper();
  }
  /**
   * 设置Cropper
   */
  setUpCropper(){
    this.cropperSettings = new CropperSettings();
    this.cropperSettings.width = 1;
    this.cropperSettings.height = 1;
    this.cropperSettings.croppedWidth =150;
    this.cropperSettings.croppedHeight = 150;
    this.cropperSettings.canvasWidth = 400;
    this.cropperSettings.canvasHeight = 350;
    this.cropperSettings.noFileInput=true;

  }

  /**
   * 图片选择事件
   * @param $event
   */
  fileChangeListener($event) {
    let image:any = new Image();
    let file:File = $event.target.files[0];
    let myReader:FileReader = new FileReader();
    myReader.onloadend =(loadEvent:any)=>{
      image.src = loadEvent.target.result;
      this.originalProfile =image.src;
      this.cropper.setImage(image);
    };
    myReader.readAsDataURL(file);

  }


  /**
   * 讲原始图形显示在画布上
   */
  ngAfterViewInit(){
    let image = new Image();
    image.src=this.homeService.user.originalProfile;
    this.cropper.setImage(image);
  }

  /**
   * 关闭提示框
   * @param close
   */
  closeDialog(){
   this.dialogRef.close();
}

  /**
   * 更新头像
   */
  doUpdate(close:HTMLButtonElement){
    let zoomProfile = this.dataURLtoBlob(this.data.image);
    let originalProfile = this.dataURLtoBlob(this.originalProfile);
    console.log(zoomProfile);
    console.log(originalProfile);

   /*this.profileInfo.profileImg=this.data.image;
    this.profileInfo.originalProfileImg=this.tempOriginalProfileImg;
    let formData = new FormData();
    formData.append("originalProfileImg",this.profileInfo.originalProfileImg);
    formData.append("profileImgFile",this.dataURLtoBlob(this.profileInfo.profileImg),this.currentImgFileName);
    formData.append("oldProfileImg",this.homeService.homeInfo.profileImg);
    this.ngProgressService.start();
    this.personInfoService.updateProfileImg(formData).subscribe(res=>{
      this.ngProgressService.done();
      if(res.code==200){
        //更新主页数据
        this.homeService.homeInfo.profileImg= res.data;
        this.toastsManager.success("头像修改成功","修改结果",this.toastOptions);
        //保存更新结果
        this.personInfoService.personBaseInfo.originalProfileImg= this.profileInfo.originalProfileImg;
        this.personInfoService.personBaseInfo.profileImg= res.data;
      }else{
        this.toastsManager.error("头像修改失败","修改结果",this.toastOptions);
      }
      close.click();
    });*/
  }
  dataURLtoBlob(dataurl) {
    let arr = dataurl.split(','), mime = arr[0].match(/:(.*?);/)[1],
      bstr = atob(arr[1]), n = bstr.length, u8arr = new Uint8Array(n);
    while(n--){
      u8arr[n] = bstr.charCodeAt(n);
    }
    return new Blob([u8arr], {type:mime});
  }
}
