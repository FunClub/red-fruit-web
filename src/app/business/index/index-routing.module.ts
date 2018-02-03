import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {LoginComponent} from './component/login/login.component';
import {Route, RouterModule} from '@angular/router';
import {IndexComponent} from './component/index/index.component';
import {RegisterComponent} from './component/register/register.component';
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
        component:LoginComponent
      },
      {
        path:'register',
        component:RegisterComponent
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
