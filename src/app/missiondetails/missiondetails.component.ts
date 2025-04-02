import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { SpaceapiService } from '../network/spaceapi.service';
import { Mission } from '../../models/mission';
import { MatCardModule } from '@angular/material/card';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

@Component({
  selector: 'app-missiondetails',
  standalone: true,
  imports: [CommonModule, MatCardModule, MatProgressSpinnerModule],
  templateUrl: './missiondetails.component.html',
  styleUrls: ['./missiondetails.component.css']
})
export class MissiondetailsComponent implements OnInit {
  mission: Mission | null = null;
  loading = true;

  constructor(
    private route: ActivatedRoute,
    private spaceApi: SpaceapiService
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.spaceApi.getMissionById(id).subscribe(data => {
        this.mission = data;
        this.loading = false;
      });
    }
  }
}
