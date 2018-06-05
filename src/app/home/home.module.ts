import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { SliderComponent } from './slider/slider.component';
import { CarouselModule } from 'ngx-bootstrap/carousel';
/*import { CarouselModule } from 'ngx-bootstrap';*/

@NgModule({
  imports: [
    CommonModule,CarouselModule.forRoot()
  ],
  declarations: [HomeComponent,
    SliderComponent
],
  exports:[HomeComponent]
})
export class HomeModule { }
