import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IndexComponent } from './index/index.component';
import {SharedModule} from '../../shared/shared.module';
import {HeaderComponent} from './header/header.component';
import {LoginComponent} from './login/login.component';
import {IndexRoutingModule} from './index-routing.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {
  MatButtonModule, MatCheckboxModule, MatDatepickerModule, MatInputModule, MatNativeDateModule, MatRadioModule, MatSelectModule,
  MatStepperModule
} from '@angular/material';
import { RegisterComponent } from './register/register.component';

/**
 * 登录注册相关模块
 */
@NgModule({
  imports: [
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatCheckboxModule,
    MatButtonModule,
    MatRadioModule,
    MatNativeDateModule,
    MatDatepickerModule,
    MatStepperModule,
    MatSelectModule,
    SharedModule,
    IndexRoutingModule
  ],
  declarations: [
    IndexComponent,
    HeaderComponent,
    RegisterComponent,
    LoginComponent
  ]
})
export class IndexModule { }
