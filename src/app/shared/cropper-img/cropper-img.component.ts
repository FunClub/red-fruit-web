import {Component, Inject, OnInit, ViewChild} from '@angular/core';
import {ToastsManager} from 'ng2-toastr';
import {ImageCropperComponent, CropperSettings} from 'ng2-img-cropper';
import {HomeService} from '../../core/service/home.service';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {Img} from '../../core/data/app.data';
import {CenterService} from '../../core/service/center.service';
import {ResponseData} from '../../core/data/dto/response.data';


@Component({
  selector: 'app-cropper-img',
  templateUrl: './cropper-img.component.html',
  styleUrls: ['./cropper-img.component.css'],
})
export class CropperImgComponent implements OnInit {


  @ViewChild('cropper', undefined)
  cropper: ImageCropperComponent;
  data: any;
  cropperSettings: CropperSettings;

  /**
   * 原始图像
   */
  originalProfile: string;

  /**
   * 文件是否被改变
   */
  isImgChanged: boolean;

  constructor(@Inject(MAT_DIALOG_DATA) public type: string, private toastsManager: ToastsManager,
               private homeService: HomeService,private centerService:CenterService,
              public dialogRef: MatDialogRef<CropperImgComponent>,
              ) {


  };

  ngOnInit() {
    this.data = {image: Img.PREFIX + this.centerService.centerInfo.originalProfile};
    this.originalProfile = Img.PREFIX + this.centerService.centerInfo.originalProfile;

    this.setUpCropper();
  }

  /**
   * 设置Cropper
   */
  setUpCropper() {
    this.cropperSettings = new CropperSettings();
    this.cropperSettings.width = 1;
    this.cropperSettings.height = 1;
    this.cropperSettings.croppedWidth = 150;
    this.cropperSettings.croppedHeight = 150;
    this.cropperSettings.canvasWidth = 400;
    this.cropperSettings.canvasHeight = 350;
    this.cropperSettings.noFileInput = true;

  }

  /**
   * 图片选择事件
   * @param $event
   */
  fileChangeListener($event) {
    this.isImgChanged = true;
    let image: any = new Image();
    let file: File = $event.target.files[0];
    let myReader: FileReader = new FileReader();
    myReader.onloadend = (loadEvent: any) => {
      image.src = loadEvent.target.result;
      this.originalProfile = image.src;
      this.cropper.setImage(image);
      this.isImgChanged = true;
    };
    myReader.readAsDataURL(file);

  }


  /**
   * 讲原始图形显示在画布上
   */
  ngAfterViewInit() {
    let image = new Image();
    if (this.centerService.centerInfo.originalProfile === 'static/profile.png') {
      image.src = 'assets/img/profile.png';
    } else {
      image.src = this.centerService.centerInfo.originalProfile;
    }
    image.onload = () => {
      this.cropper.setImage(image);
    };
    this.cropper.setImage(image);
  }

  /**
   * 关闭提示框
   * @param close
   */
  closeDialog() {
    this.dialogRef.close();
  }

  /**
   * 更新头像
   */
  doUpdate() {
    if (this.isImgChanged) {
      this.centerService.uploadProfile(this.data.image, this.type, this.originalProfile).subscribe(res => {
        this.uploaded(res);
      });
    } else {
      this.centerService.uploadProfile(this.data.image, this.type).subscribe(res => {
        this.uploaded(res);
      });
    }
  }

  uploaded(res: ResponseData<boolean>) {
    if(res.data){
      this.toastsManager.success("更新成功");
      this.dialogRef.close(true);
    }else{
      this.toastsManager.error("更新失败，请重试");
    }
  }
}
