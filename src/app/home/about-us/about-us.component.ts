import { Component, OnInit } from '@angular/core';
import { CollapseModule } from 'ngx-bootstrap';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.css']
})
export class AboutUsComponent implements OnInit {
  isCollapsed = true;
  constructor() { }

  ngOnInit() {
  }

}
