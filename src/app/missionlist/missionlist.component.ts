import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Mission } from '../../models/mission';

import { MatCardModule } from '@angular/material/card';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { RouterModule } from '@angular/router';
import { MissionfilterComponent } from '../missionfilter/missionfilter.component';

@Component({
  selector: 'app-missionlist',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    HttpClientModule,
    MatCardModule,
    MatProgressSpinnerModule,
    MissionfilterComponent
  ],
  templateUrl: './missionlist.component.html',
  styleUrls: ['./missionlist.component.css']
})
export class MissionlistComponent implements OnInit {
  missions: Mission[] = [];
  loading = true;

  constructor(public http: HttpClient) {}

  ngOnInit(): void {
    this.fetchAllMissions();
  }

  fetchAllMissions(): void {
    this.loading = true;
    this.http.get<Mission[]>('https://api.spacexdata.com/v3/launches')
      .subscribe(data => {
        this.missions = data;
        this.loading = false;
      });
  }

  onFiltersChanged(filters: any): void {
    this.loading = true;

    let url = 'https://api.spacexdata.com/v3/launches?';

    if (filters.year) {
      url += `launch_year=${filters.year}&`;
    }
    if (filters.launch_success !== undefined && filters.launch_success !== null) {
      url += `launch_success=${filters.launch_success}&`;
    }
    if (filters.land_success !== undefined && filters.land_success !== null) {
      url += `land_success=${filters.land_success}`;
    }

    this.http.get<Mission[]>(url).subscribe(data => {
      this.missions = data;
      this.loading = false;
    });
  }
}
