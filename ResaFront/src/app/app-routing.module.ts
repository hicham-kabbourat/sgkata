import { RoomListComponent } from './room-list/room-list.component';
import { ReservationListComponent } from './reservation-list/reservation-list.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ReservationComponent } from './reservation/reservation.component';


const routes: Routes = [
  {
    path: "reservation-list",
    component: ReservationListComponent
  }, {
    path: "rooms",
    component: RoomListComponent
  },
  {
    path: "NewReservation",
    component: ReservationComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
