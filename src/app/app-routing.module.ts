import { NgModule } from '@angular/core';
import {PreloadAllModules, Route, RouterModule} from '@angular/router';
import {IndexComponent} from './business/index/index/index.component';
import {LoginComponent} from './business/index/login/login.component';
import {RegisterComponent} from './business/index/register/register.component';
import {LoginGuard} from './core/guard/login.guard';

/**
 * 应用根路模块
 */
const routes:Route[]=[
  {
    path:'index',
    component:IndexComponent
  },
  {
    path:'home',
    loadChildren:'app/business/home/home.module#HomeModule',
    canActivate:[LoginGuard]
  },
  {
    path:'',
    redirectTo:'index/login',
    pathMatch:'full'
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes,{preloadingStrategy:PreloadAllModules,useHash:true})
  ],
  declarations: [],
  exports:[
    RouterModule
  ]
})
export class AppRoutingModule { }
