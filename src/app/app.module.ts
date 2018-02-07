import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {CoreModule} from './core/core.module';
import {IndexModule} from './business/index/index.module';
import {AppRoutingModule} from './app-routing.module';
import {MAT_DATE_LOCALE, MAT_LABEL_GLOBAL_OPTIONS} from '@angular/material';
import {ToastModule, ToastOptions} from 'ng2-toastr';
import {CustomToastOption} from './core/data/app.data';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    ToastModule.forRoot(),
    CoreModule,
    IndexModule
  ],
  providers: [
    {provide: MAT_LABEL_GLOBAL_OPTIONS, useValue: {float: 'never'}},
    {provide: MAT_DATE_LOCALE, useValue: 'cn-GB'},
    {provide: ToastOptions, useClass: CustomToastOption},
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
