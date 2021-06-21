import { ReservationModel } from './../models/reservation.model';
import { ReservationService } from './../services/reservation.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-reservation',
  templateUrl: './reservation.component.html',
  styleUrls: ['./reservation.component.scss']
})
export class ReservationComponent implements OnInit {

  public registerForm: FormGroup;
  public submitted = false;

  startHours: string[] = ['00', '01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23'];
  endHours: string[] = ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24'];
  rooms: string[] = ['Room0', 'Room1', 'Room2', 'Room3', 'Room4', 'Room5', 'Room6', 'Room7', 'Room8', 'Room9'];


  constructor(private formBuilder: FormBuilder, private router: Router, private reservationService: ReservationService) { }

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      name: ['', Validators.required],
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      startHour: ['', [Validators.required, Validators.min(0)]],
      endHour: ['', [Validators.required, Validators.max(24)]],
      room: ['', Validators.required],

    });
  }

  // convenience getter for easy access to form fields
  get f() { return this.registerForm.controls; }

  onSubmit() {
    this.submitted = true;
    if (this.registerForm.invalid) {
      return;
    }

    let res = new ReservationModel();
    res.Name = this.registerForm.value.name;
    res.FirstName = this.registerForm.value.firstName;
    res.LastName = this.registerForm.value.lastName;
    res.StartHour = this.registerForm.value.startHour;
    res.EndHour = this.registerForm.value.endHour;
    res.Date = new Date();
    res.Room = this.registerForm.value.room;

    console.log("resa", res);
    this.reservationService.postReservations(res).subscribe(x => this.router.navigate(['/'])  );
  }

  onReset() {
    this.submitted = false;
    this.registerForm.reset();
  }

}

