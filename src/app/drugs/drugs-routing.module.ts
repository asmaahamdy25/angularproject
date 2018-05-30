import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { DrugsComponent } from './drugs.component';

const routes: Routes = [
  { path: 'drugs', component: DrugsComponent }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
  ],
  exports: [RouterModule]
})
export class DrugsRoutingModule { }
