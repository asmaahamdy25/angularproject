import { Injectable } from '@angular/core';
import { IDentistList } from '../interfaces/IDentistList';

@Injectable()
export class DentistService {

    public dentists: IDentistList[];
    constructor() {
        this.dentists = [
            {
                dentistImage: '',
                dentistName: 'Asmaa Elrosasy',
                dentistEmail: 'asmaaelrosasy@gmail.com',
                dentisAge: 30,
                dentistGender: 'Female',
                dentistPayment: 'Done',
                appointmentDate: '18/4/2018',
                dentisAddress: 'Elshekh zayed',
                dentisPhone: '01020036362'
            },
            {
                dentistImage: '',
                dentistName: 'Asmaa Elrosasy',
                dentistEmail: 'asmaaelrosasy@gmail.com',
                dentisAge: 30,
                dentistGender: 'Female',
                dentistPayment: 'Done',
                appointmentDate: '18/4/2018',
                dentisAddress: 'Elshekh zayed',
                dentisPhone: '01020036362'
            },
            {
                dentistImage: '',
                dentistName: 'Asmaa Elrosasy',
                dentistEmail: 'asmaaelrosasy@gmail.com',
                dentisAge: 30,
                dentistGender: 'Female',
                dentistPayment: 'Done',
                appointmentDate: '18/4/2018',
                dentisAddress: 'Elshekh zayed',
                dentisPhone: '01020036362'
            }
        ];
    }
    public getAll(): IDentistList[] {
        return this.dentists;
    }
}
