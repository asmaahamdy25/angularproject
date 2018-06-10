import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SignupComponent } from './core/signup/signup.component';
import { DemoComponent } from './DEMO/component';
import { ChartsComponent } from './facilites/charts/charts.component';

/*should be Home Module*/
const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'signup', component: SignupComponent},
  {path: 'demo', component: DemoComponent},
  {path: 'charts', component: ChartsComponent}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
