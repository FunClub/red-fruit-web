import { NgModule } from '@angular/core';
import {RegisterService} from './service/register.service';
import {DataModule} from './data/data.module';
import {HttpClientModule} from '@angular/common/http';
import {SharedService} from './service/shared.service';
import {LoginService} from './service/login.service';
import {LoginGuard} from './guard/login.guard';
import {HomeService} from './service/home.service';
import {CenterService} from './service/center.service';
import {InfoService} from './service/info.service';
import {SearchService} from './service/search.service';
import {MoodService} from './service/mood.service';


@NgModule({
  imports: [
    DataModule,
    HttpClientModule,
  ],
  providers:[
    RegisterService,
    LoginService,
    SharedService,
    HomeService,
    CenterService,
    InfoService,
    LoginGuard,
    SearchService,
    MoodService
  ],
  declarations: []
})
export class CoreModule { }
