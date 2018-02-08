import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {LoginComponent} from './login/login.component';
import {Route, RouterModule} from '@angular/router';
import {IndexComponent} from './index/index.component';
import {RegisterComponent} from './register/register.component';
/**
 * 应用路由模块
 */
const routes:Route[]=[
  {
    path:'index',
    component:IndexComponent,
    children:[
      {
        path:'login',
        component:LoginComponent
      },
      {
        path:'register',
        component:RegisterComponent
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
export class IndexRoutingModule { }
