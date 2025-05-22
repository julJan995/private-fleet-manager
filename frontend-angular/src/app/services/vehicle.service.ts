import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { Vehicle } from '../models/vehicle.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class VehicleService {
  // TO DO przerobić na backend
  private readonly DATA_URL = 'assets/example-vehicles.json';

  constructor(private http: HttpClient) { }

  // TO DO dodać obsługę błędów
  getVehiclesList(): Observable<Vehicle[]> {
    return this.http.get<Vehicle[]>(this.DATA_URL)
  }
}
