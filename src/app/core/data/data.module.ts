import { NgModule } from '@angular/core';
import {SharedApi, RegisterApi, LoginApi, CenterApi, InfoApi} from './api.data';
import {FormState, RegisterStatus} from './app.data';



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
    InfoApi
  ]
})
export class DataModule { }
