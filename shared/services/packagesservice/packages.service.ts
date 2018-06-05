import { Injectable } from '@angular/core';
import { Packagecard } from '../../models/classes/packgecard';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class PackagesService {

  private packages: Packagecard[];
  constructor() {
    this.packages = [
      {
        packageName: 'standard',
        icon: 'fa fa-handshake-o',
        price: 100,
        features: ['1 - 5 Dentists profile',
          '20 Gigabyte storage',
          'Patients statistics',
          'Clinic Statistic',
          'UI support']
      },
      {
        packageName: 'premium',
        icon: 'fa fa-hospital-o',
        price: 600,
        features: ['unlimited dentists profile',
          '100 Gigabyte storage',
          'Patients statistics',
          'Clinic Statistic',
          'UI support']
      },
      {
        packageName: 'basic',
        icon: 'fa fa-medkit',
        price: 30,
        features: ['1 Dentist profile',
          '5 Gigabyte storage',
          'Patients statistics',
          'UI support']
      }
    ];
  }
  public getAll(): Packagecard[] {
    return this.packages;
  }
}


