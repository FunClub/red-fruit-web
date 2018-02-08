import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './footer/footer.component';
import {MatButtonModule, MatInputModule} from '@angular/material';
import {RouterModule} from '@angular/router';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    FooterComponent
  ],
  exports:[
    CommonModule,
    FooterComponent,
    MatInputModule,
    MatButtonModule,
    RouterModule
  ]
})
export class SharedModule { }
