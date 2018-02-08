import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HomeComponent} from './home/home.component';
import {HomeRoutingModule} from './home-routing.module';
import {SharedModule} from '../../shared/shared.module';
import {CenterModule} from '../center/center.module';
import {ChatModule} from '../chat/chat.module';

@NgModule({
  imports: [
    SharedModule,
    HomeRoutingModule,
    CenterModule,
    ChatModule
  ],

  declarations: [HomeComponent]
})
export class HomeModule { }
