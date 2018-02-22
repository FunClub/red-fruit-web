import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HomeComponent} from './home/home.component';
import {HomeRoutingModule} from './home-routing.module';
import {SharedModule} from '../../shared/shared.module';
import {CenterModule} from '../center/center.module';
import {ChatModule} from '../chat/chat.module';
import {LuckModule} from '../luck/luck.module';
import { SummaryComponent } from './summary/summary.component';
import { TrendRecommendComponent } from './trend-recommend/trend-recommend.component';
import { MessageComponent } from './message/message.component';
import {TrendNoticeComponent} from './message/trend-notice/trend-notice.component';

@NgModule({
  imports: [
    SharedModule,
    HomeRoutingModule,
    CenterModule,
    ChatModule,
    LuckModule
  ],

  declarations: [
    HomeComponent,
    SummaryComponent,
    TrendRecommendComponent,
    MessageComponent,
    TrendNoticeComponent
  ]
})
export class HomeModule { }
