import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { SliderComponent } from './slider/slider.component';
import { ContactComponent } from './contact/contact.component';
import { QuestionsComponent } from './questions/questions.component';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { IntroductionComponent } from './introduction/introduction.component';
import { PricesComponent } from './prices/prices.component';
import { CounterComponent } from './counter/counter.component';
import { AboutUsComponent } from './about-us/about-us.component';

//import { CarouselModule } from 'ngx-bootstrap/carousel';


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