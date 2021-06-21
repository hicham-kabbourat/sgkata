import { ReservationModel } from './../models/reservation.model';
import { ReservationService } from './../services/reservation.service';
import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-reservation-list',
  templateUrl: './reservation-list.component.html',
  styleUrls: ['./reservation-list.component.scss']
})
export class ReservationListComponent implements OnInit {

  reservations: ReservationModel[] = [];
  subscription: Subscription;

  constructor(private reservationService: ReservationService, private router: Router) { }

  ngOnInit(): void {

    this.subscription = this.reservationService.getReservations().subscribe(x => this.reservations = x);
  }

  onDelete(id) {
    console.log(id);
    this.reservationService.deleteById(id).subscribe(x => {
      this.router.navigate(['/']);
    } );
  }

  ngOnDestroy(): void {
  this.subscription.unsubscribe();
}

}
