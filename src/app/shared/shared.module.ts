import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './footer/footer.component';
import {MatButtonModule, MatDialogModule, MatInputModule, MatTooltipModule} from '@angular/material';
import {RouterModule} from '@angular/router';
import { CharismaComponent } from './charisma/charisma.component';
import { LivingHabitComponent } from './living-habit/living-habit.component';
import {UploadImgComponent} from './upload-img/upload-img.component';
import {ImageCropperComponent} from 'ng2-img-cropper';
import { DialogTitleComponent } from './dialog-title/dialog-title.component';
import { ImgPathPipe } from './pipe/img-path.pipe';
import { GenderPipe } from './pipe/gender.pipe';
import { NullPlaceholderPipe } from './pipe/null-placeholder.pipe';
import { ParentAreaPipe } from './pipe/parent-area.pipe';
import { EducationPipe } from './pipe/education.pipe';
import {IncomePipe} from './pipe/income.pipe';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { ProfessionPipe } from './pipe/profession.pipe';
import { HouseAvailablePipe } from './pipe/house-available.pipe';
import { AgePipe } from './pipe/age.pipe';
import { HeightPipe } from './pipe/height.pipe';
import { WeightPipe } from './pipe/weight.pipe';
import {RecommendedPercentPipe} from './pipe/recommended-percent.pipe';
import {BusyModule} from 'angular2-busy';

@NgModule({
  imports: [
    CommonModule,
    MatTooltipModule,
    MatButtonModule,
    BusyModule
  ],
  declarations: [
    FooterComponent,
    CharismaComponent,
    LivingHabitComponent,
    UploadImgComponent,
    ImageCropperComponent,
    DialogTitleComponent,
    ImgPathPipe,
    GenderPipe,
    NullPlaceholderPipe,
    ParentAreaPipe,
    EducationPipe,
    IncomePipe,
    ProfessionPipe,
    HouseAvailablePipe,
    AgePipe,
    HeightPipe,
    WeightPipe,
    RecommendedPercentPipe
  ],
  entryComponents:[
    UploadImgComponent
  ],
  exports:[
    /**
     * 导出模块
     */
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    MatInputModule,
    MatButtonModule,
    RouterModule,
    MatDialogModule,
    MatTooltipModule,
    BusyModule,
    /**
     * 导出组件
     */
    FooterComponent,
    CharismaComponent,
    LivingHabitComponent,
    UploadImgComponent,
    DialogTitleComponent,


    /**
     * 导出管道
     */
    ImgPathPipe,
    GenderPipe,
    NullPlaceholderPipe,
    EducationPipe,
    ParentAreaPipe,
    IncomePipe,
    ProfessionPipe,
    HouseAvailablePipe,
    AgePipe,
    HeightPipe,
    WeightPipe,
    RecommendedPercentPipe
  ]
})
export class SharedModule { }
