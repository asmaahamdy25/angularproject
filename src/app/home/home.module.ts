import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { SliderComponent } from './slider/slider.component';
import { ContactComponent } from './contact/contact.component';
import { QuestionsComponent } from './questions/questions.component';
import { CarouselModule } from 'ngx-bootstrap/carousel';


@NgModule({
  imports: [
    CommonModule,
    CarouselModule.forRoot()
  ],
  declarations: [
    HomeComponent,
    SliderComponent,
    ContactComponent,
    QuestionsComponent
],
  exports: [HomeComponent]
})
export class HomeModule { }
