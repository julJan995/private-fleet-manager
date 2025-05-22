import { Component, OnInit } from '@angular/core';
import { VehicleService } from '../../../services/vehicle.service';
import { Observable, of } from 'rxjs';
import { Vehicle } from '../../../models/vehicle.model';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-vehicles-list',
  standalone: true,
  imports: [AsyncPipe],
  templateUrl: './vehicles-list.component.html',
  styleUrl: './vehicles-list.component.scss'
})
export class VehiclesListComponent implements OnInit {
  vehiclesList$: Observable<Vehicle[]> = of([]);

  constructor(private vehicleService: VehicleService) {}

  ngOnInit() {
    this.vehiclesList$ = this.vehicleService.getVehiclesList();
  }
}
