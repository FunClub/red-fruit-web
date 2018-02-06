import { NgModule } from '@angular/core';
import {RegisterService} from './service/register.service';
import {DataModule} from './data/data.module';
import {HttpClientModule} from '@angular/common/http';
import {AreaService} from './service/area.service';

@NgModule({
  imports: [
    DataModule,
    HttpClientModule
  ],
  providers:[
    RegisterService,
    AreaService
  ],
  declarations: []
})
export class CoreModule { }
