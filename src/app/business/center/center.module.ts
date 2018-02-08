import { NgModule } from '@angular/core';
import { CenterComponent } from './center/center.component';
import { InfoComponent } from './info/info.component';

import { MemorialDayComponent } from './memorial-day/memorial-day.component';
import {SharedModule} from '../../shared/shared.module';

@NgModule({
  imports: [
    SharedModule
  ],
  declarations: [CenterComponent, InfoComponent, MemorialDayComponent]
})
export class CenterModule { }
