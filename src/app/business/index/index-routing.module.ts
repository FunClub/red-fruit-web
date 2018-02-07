import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {LoginComponent} from './login/login.component';
import {Route, RouterModule} from '@angular/router';
import {IndexComponent} from './index/index.component';
import {RegisterComponent} from './register/register.component';
/**
 * 应用根路模块
 */
const routes:Route[]=[
  {
    path:'index',
    component:IndexComponent,
    children:[
      {
        path:'login',
        component:LoginComponent,
        data:'欢迎登录'
      },
      {
        path:'register',
        component:RegisterComponent,
        data:'欢迎注册'
      }
    ]
  },
  {
    path:'',
    redirectTo:'index/login',
    pathMatch:'full'
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
