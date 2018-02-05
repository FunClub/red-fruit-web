import { NgModule } from '@angular/core';
import {BusinessSharedApi, BusinessUserApi} from './api';
import {FormState} from './form-state';

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
