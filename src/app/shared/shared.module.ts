import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './footer/footer.component';
import {MatButtonModule, MatDialogModule, MatInputModule, MatMenuModule, MatTooltipModule} from '@angular/material';
import {RouterModule} from '@angular/router';
import { CharismaComponent } from './charisma/charisma.component';
import { LivingHabitComponent } from './living-habit/living-habit.component';
import {CropperImgComponent} from './cropper-img/cropper-img.component';
import {ImageCropperModule} from 'ng2-img-cropper';
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
import { ScrollPageDirective } from './scroll-page.directive';
import { PageLoadingComponent } from './page-loading/page-loading.component';
import { MoodEditorComponent } from './mood-editor/mood-editor.component';
import {FroalaEditorModule, FroalaViewModule} from 'angular-froala-wysiwyg';
import {FaceComponent} from './face/face.component';
import {UploadImgComponent} from './upload-img/upload-img.component';
import {DndModule} from 'ng2-dnd';
import { UploadVideoComponent } from './upload-video/upload-video.component';
import { ArticleComponent } from './article/article.component';
import {SigleMoodComponent} from './sigle-mood/sigle-mood.component';
import {TrendOperationComponent} from './trend-operation/trend-operation.component';
import { MoodDetailComponent } from './mood-detail/mood-detail.component';
import {TrendDiscussionComponent} from './trend-discussion/trend-discussion.component';
import { DiscussionViewerComponent } from './discussion-viewer/discussion-viewer.component';
import {ReplyDiscussionComponent} from './reply-discussion/reply-discussion.component';


@NgModule({
  imports: [
    CommonModule,
    MatTooltipModule,
    MatButtonModule,
    BusyModule,
    ImageCropperModule,
    MatMenuModule,
    DndModule.forRoot(),
    FroalaEditorModule.forRoot(),
    FroalaViewModule.forRoot()
  ],
  declarations: [
    FooterComponent,
    CharismaComponent,
    LivingHabitComponent,
    CropperImgComponent,
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
    RecommendedPercentPipe,
    ScrollPageDirective,
    PageLoadingComponent,
    MoodEditorComponent,
    FaceComponent,
    UploadImgComponent,
    UploadVideoComponent,
    ArticleComponent,
    SigleMoodComponent,
    TrendOperationComponent,
    MoodDetailComponent,
    TrendDiscussionComponent,
    DiscussionViewerComponent,
    ReplyDiscussionComponent
  ],
  entryComponents:[
    CropperImgComponent,
    MoodEditorComponent,
    MoodDetailComponent
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
    DndModule,
    TrendDiscussionComponent,
    /**
     * 导出组件
     */
    FooterComponent,
    CharismaComponent,
    LivingHabitComponent,
    CropperImgComponent,
    DialogTitleComponent,
    PageLoadingComponent,
    MoodEditorComponent,
    FaceComponent,
    ArticleComponent,
    SigleMoodComponent,
    TrendOperationComponent,
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
    RecommendedPercentPipe,


  ]
})
export class SharedModule { }
