import { IAppointment } from '../interfaces/IAppointment';

export class AppoinmentCardService {

    // Initialization of AppointmentcardService Data

    private appointmentcards: IAppointment[] = [

        {
            DrName: 'Dr.DaliaHany',
            patientName: 'AhmedYasser',
            patientNum: 1,
            facilityNum: 12563,
            roomNum: 200,
            appointmentTime: '04:12 pm'

        },
        {
            DrName: 'Dr.DaliaHany',
            patientName: 'AliMohamed',
            patientNum: 2,
            facilityNum: 12003,
            roomNum: 290,
            appointmentTime: '06:12 pm'

        },
        {
            DrName: 'Dr.DaliaHany',
            patientName: 'rawaaAlaa',
            patientNum: 3,
            facilityNum: 1663,
            roomNum: 300,
            appointmentTime: '08:12 pm'
        }
    ];

    // CRUD Operations

    public getAll(): IAppointment[] {
        return this.appointmentcards;
    }

    public add(appointmentcard: IAppointment) {
        this.appointmentcards.push(appointmentcard);
    }
}
