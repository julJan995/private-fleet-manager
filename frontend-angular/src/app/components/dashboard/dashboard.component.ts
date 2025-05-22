import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { VehiclesListComponent } from './vehicles-list/vehicles-list.component';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [MatIconModule, VehiclesListComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {

}
