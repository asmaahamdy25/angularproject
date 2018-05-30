import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { DrugsComponent } from './drugs.component';
import { DrugsRoutingModule } from './drugs-routing.module';

@NgModule({
    declarations: [
        DrugsComponent
    ],
    imports: [
        CommonModule,
        DrugsRoutingModule
    ]
  })
  export class DrugsModule { }
