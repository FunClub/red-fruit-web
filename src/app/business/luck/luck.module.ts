import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchComponent } from './search/search.component';
import {SharedModule} from '../../shared/shared.module';
import {MatSelectModule} from '@angular/material';

@NgModule({
  imports: [
    SharedModule,
    MatSelectModule
  ],
  declarations: [SearchComponent]
})
export class LuckModule { }
