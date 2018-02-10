import { NgModule } from '@angular/core';
import { CenterComponent } from './center/center.component';
import { InfoComponent } from './info/info.component';

import { MemorialDayComponent } from './memorial-day/memorial-day.component';
import {SharedModule} from '../../shared/shared.module';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {MatDialogModule} from '@angular/material';
@NgModule({
  imports: [
    SharedModule,
    MatButtonToggleModule,
    MatDialogModule
  ],
  declarations: [CenterComponent, InfoComponent, MemorialDayComponent]
})
export class CenterModule { }
