import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms'; 

@Component({
  selector: 'app-create-form',
  templateUrl: './create-form.component.html',
  styleUrls: ['./create-form.component.css']
})
export class CreateFormComponent implements OnInit {
       f:NgForm;
  constructor() {

   }

  ngOnInit() {
  }
submit(){
    alert(this.f);
  }
}
