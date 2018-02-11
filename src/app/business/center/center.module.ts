import { NgModule } from '@angular/core';
import { CenterComponent } from './center/center.component';
import { InfoComponent } from './info/info.component';

import { MemorialDayComponent } from './memorial-day/memorial-day.component';
import {SharedModule} from '../../shared/shared.module';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {MatDialogModule, MatInputModule} from '@angular/material';
import { UpdateIntroductionComponent } from './info/update-introduction/update-introduction.component';
@NgModule({
  imports: [
    SharedModule,
    MatInputModule,
    MatButtonToggleModule
  ],
  declarations: [CenterComponent, InfoComponent, MemorialDayComponent, UpdateIntroductionComponent],
  entryComponents:[
    UpdateIntroductionComponent
  ]
})
export class CenterModule { }
