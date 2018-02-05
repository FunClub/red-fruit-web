import { NgModule } from '@angular/core';
import {PreloadAllModules, Route, RouterModule} from '@angular/router';
import {IndexComponent} from './business/index/index/index.component';
import {LoginComponent} from './business/index/login/login.component';

/**
 * 应用根路模块
 */
const routes:Route[]=[

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
