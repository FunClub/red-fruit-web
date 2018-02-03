import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {CoreModule} from './core/core.module';
import {IndexModule} from './business/index/index.module';
import {AppRoutingModule} from './app-routing.module';
import {MAT_DATE_LOCALE, MAT_LABEL_GLOBAL_OPTIONS} from '@angular/material';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    CoreModule,
    IndexModule
  ],
  providers: [
    {provide: MAT_LABEL_GLOBAL_OPTIONS, useValue: {float: 'never'}},
    {provide: MAT_DATE_LOCALE, useValue: 'cn-GB'},
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
