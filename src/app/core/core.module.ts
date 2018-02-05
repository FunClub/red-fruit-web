import { NgModule } from '@angular/core';
import {RegisterService} from './service/register.service';
import {DataModule} from './data/data.module';
import {HttpClientModule} from '@angular/common/http';

@NgModule({
  imports: [
    DataModule,
    HttpClientModule
  ],
  providers:[
    RegisterService,
  ],
  declarations: []
})
export class CoreModule { }
