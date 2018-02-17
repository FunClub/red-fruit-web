import { NgModule } from '@angular/core';


import {Route, RouterModule} from '@angular/router';

import {HomeModule} from './home.module';
import {HomeComponent} from './home/home.component';
import {CenterComponent} from '../center/center/center.component';
import {MemorialDayComponent} from '../center/memorial-day/memorial-day.component';
import {InfoComponent} from '../center/info/info.component';
import {SearchComponent} from '../luck/search/search.component';
import {SummaryComponent} from './summary/summary.component';
import {MoodsComponent} from '../center/moods/moods.component';
/**
 * 主页路由模块
 */
const routes:Route[]=[
  {
    path:'',
    component:HomeComponent,
    children:[
      {
        path:'summary',component:SummaryComponent
      },
      {
        path:'center/:id', component:CenterComponent,
        children:[
          {
            path:'day', component:MemorialDayComponent,
          },
          {
            path:'info', component:InfoComponent,
          },
          {
            path:'moods', component:MoodsComponent,
          },
          {
            path:'',
            redirectTo:'info',
            pathMatch:'full'
          }
        ]
      },
      {
        path:'luck',component:SearchComponent
      },
      {
        path:'',
        redirectTo:'summary',
        pathMatch:'full'
      }
    ]
  }
];
@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  declarations: [],
  exports:[
    RouterModule
  ]
})
export class HomeRoutingModule { }
