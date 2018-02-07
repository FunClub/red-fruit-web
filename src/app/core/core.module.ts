import { NgModule } from '@angular/core';
import {RegisterService} from './service/register.service';
import {DataModule} from './data/data.module';
import {HttpClientModule} from '@angular/common/http';
import {SharedService} from './service/shared.service';
import {LoginService} from './service/login.service';

@NgModule({
  imports: [
    DataModule,
    HttpClientModule
  ],
  providers:[
    RegisterService,
    LoginService,
    SharedService
  ],
  declarations: []
})
export class CoreModule { }
