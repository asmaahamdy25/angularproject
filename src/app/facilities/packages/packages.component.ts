import { Component, OnInit } from '@angular/core';
import { Packagecard } from '../../../../shared/models/classes/packgecard';
import { PackagesService } from '../../../../shared/services/packagesservice/packages.service';

@Component({
    selector: 'app-packages',
    templateUrl: './packages.component.html',
    styleUrls: ['./packages.component.css'],
    providers: [PackagesService]
})
export class PackagesComponent implements OnInit {

    public packages: Packagecard[];
    constructor(public packageservice: PackagesService) {
        this.packages = packageservice.getAll();
    }

    ngOnInit() {
    }

}
