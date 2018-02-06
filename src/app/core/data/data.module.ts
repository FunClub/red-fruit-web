import { NgModule } from '@angular/core';
import {BusinessSharedApi, BusinessUserApi} from './api.data';
import {FormState} from './form-state.data';

@NgModule({
  imports: [

  ],
  declarations: [],
  providers:[
    BusinessSharedApi,
    BusinessUserApi,
    FormState
  ]
})
export class DataModule { }
