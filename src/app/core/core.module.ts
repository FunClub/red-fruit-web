import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RegisterService} from './service/register.service';

@NgModule({
  imports: [
    CommonModule
  ],
  providers:[
    RegisterService
  ],
  declarations: []
})
export class CoreModule { }
