import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { TreatmentComponent } from './treatments/treatment/treatment.component';

/*should be Home Module*/
const routes: Routes = [
  { path: 'treatment', component: TreatmentComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
