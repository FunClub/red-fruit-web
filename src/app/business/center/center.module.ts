import { NgModule } from '@angular/core';
import { CenterComponent } from './center/center.component';
import { InfoComponent } from './info/info.component';

import { MemorialDayComponent } from './memorial-day/memorial-day.component';
import {SharedModule} from '../../shared/shared.module';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {MatDialogModule, MatInputModule, MatSelectModule} from '@angular/material';
import { UpdateIntroductionComponent } from './info/update-introduction/update-introduction.component';
import { UpdateBaseInfoComponent } from './info/update-base-info/update-base-info.component';
import { UpdateHabitComponent } from './info/update-habit/update-habit.component';
import { UpdateCriterionComponent } from './info/update-criterion/update-criterion.component';
@NgModule({
  imports: [
    SharedModule,
    MatInputModule,
    MatSelectModule,
    MatButtonToggleModule
  ],
  declarations: [
    CenterComponent, InfoComponent, MemorialDayComponent,
    UpdateIntroductionComponent, UpdateBaseInfoComponent,
    UpdateHabitComponent,
    UpdateCriterionComponent
  ],
  entryComponents:[
    UpdateIntroductionComponent,
    UpdateBaseInfoComponent,
    UpdateHabitComponent,
    UpdateCriterionComponent
  ]
})
export class CenterModule { }
