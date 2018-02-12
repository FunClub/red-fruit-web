import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {CoreModule} from './core/core.module';
import {IndexModule} from './business/index/index.module';
import {AppRoutingModule} from './app-routing.module';
import {MAT_DATE_LOCALE, MAT_DIALOG_DEFAULT_OPTIONS, MAT_LABEL_GLOBAL_OPTIONS} from '@angular/material';
import {ToastModule, ToastOptions} from 'ng2-toastr';
import {CustomToastOption} from './core/data/app.data';
import {NgProgressModule} from '@ngx-progressbar/core';
import {NgProgressHttpModule} from '@ngx-progressbar/http';
import {CommonModule} from '@angular/common';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    ToastModule.forRoot(),
    NgProgressModule.forRoot(),
    NgProgressHttpModule,
    CoreModule,
    IndexModule
  ],
  providers: [
    {provide: MAT_LABEL_GLOBAL_OPTIONS, useValue: {float: 'never'}},
    {provide: MAT_DATE_LOCALE, useValue: 'cn-GB'},
    {provide: ToastOptions, useClass: CustomToastOption},
    {provide: MAT_DIALOG_DEFAULT_OPTIONS, useValue: {autoFocus:false,hasBackdrop: true}}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
