import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './footer/footer.component';
import {MatButtonModule, MatInputModule, MatTooltipModule} from '@angular/material';
import {RouterModule} from '@angular/router';
import { CharismaComponent } from './charisma/charisma.component';
import { LivingHabitComponent } from './living-habit/living-habit.component';
import {UploadImgComponent} from './upload-img/upload-img.component';
import {ImageCropperComponent} from 'ng2-img-cropper';
import { DialogTitleComponent } from './dialog-title/dialog-title.component';

@NgModule({
  imports: [
    CommonModule,
    MatTooltipModule,
    MatButtonModule
  ],
  declarations: [
    FooterComponent,
    CharismaComponent,
    LivingHabitComponent,
    UploadImgComponent,
    ImageCropperComponent,
    DialogTitleComponent
  ],
  entryComponents:[
    UploadImgComponent
  ],
  exports:[
    CommonModule,
    FooterComponent,
    MatInputModule,
    MatButtonModule,
    RouterModule,
    CharismaComponent,
    LivingHabitComponent,
    UploadImgComponent,
    DialogTitleComponent
  ]
})
export class SharedModule { }
