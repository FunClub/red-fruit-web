import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './footer/footer.component';
import {MatButtonModule, MatInputModule} from '@angular/material';
import {RouterModule} from '@angular/router';
import { CharismaComponent } from './charisma/charisma.component';
import { LivingHabitComponent } from './living-habit/living-habit.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    FooterComponent,
    CharismaComponent,
    LivingHabitComponent
  ],
  exports:[
    CommonModule,
    FooterComponent,
    MatInputModule,
    MatButtonModule,
    RouterModule,
    CharismaComponent,
    LivingHabitComponent
  ]
})
export class SharedModule { }
