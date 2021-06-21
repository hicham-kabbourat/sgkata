export class ReservationModel {

        Id: number;
        Name: string;
        FirstName: string;
        LastName: string;
        StartHour: string; // 00 to 23
        EndHour: string; // 01 to 00
        Date: Date | string;
        Room: string ;
        // Foreign Keys
        RoomId: number;
}
