import { NgModule } from '@angular/core';
import {SharedApi, RegisterApi, LoginApi, CenterApi, InfoApi, SearchApi, MoodApi} from './api.data';
import {FormState, RegisterStatus, ShowMoodImg} from './app.data';



@NgModule({
  imports: [

  ],
  declarations: [],
  providers:[
    FormState,
    RegisterStatus,
    SharedApi,
    RegisterApi,
    LoginApi,
    CenterApi,
    InfoApi,
    SearchApi,
    MoodApi,
    ShowMoodImg
  ]
})
export class DataModule { }
