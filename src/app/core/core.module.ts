import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot([
    ])
  ],
  declarations: [LoginComponent, SignupComponent],
  exports: [LoginComponent, SignupComponent]
})
export class CoreModule { }
