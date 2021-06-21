import { ReservationModel } from './../models/reservation.model';
import { HttpService } from './http.service';

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ReservationService extends HttpService {

  constructor(protected http: HttpClient) {
    super(http, 'reservations');
  }

  public getReservations(): Observable < ReservationModel[] > {
    return this.invokeGet<ReservationModel[]>();
  }

  public postReservations(resa: ReservationModel): Observable<ReservationModel> {
    return this.invokePost(resa);
  }

}
