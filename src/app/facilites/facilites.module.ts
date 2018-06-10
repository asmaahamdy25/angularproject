import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChartsComponent } from './charts/charts.component';
import { ChartsModule } from 'ng2-charts';

@NgModule({
  imports: [
    CommonModule,
    ChartsModule
  ],
  declarations: [ChartsComponent]
})
export class FacilitesModule { }
