import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-missionfilter',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './missionfilter.component.html',
  styleUrls: ['./missionfilter.component.css']
})
export class MissionfilterComponent {
  @Output() filtersChanged = new EventEmitter<any>();

  yearInput = '';
  launchSuccess: boolean | null = null;
  landSuccess: boolean | null = null;

  filter() {
    this.filtersChanged.emit({
      year: this.yearInput,
      launch_success: this.launchSuccess,
      land_success: this.landSuccess
    });
  }

  selectLaunch(success: boolean) {
    this.launchSuccess = success;
    this.filter();
  }

  selectLanding(success: boolean) {
    this.landSuccess = success;
    this.filter();
  }

  resetFilters() {
    this.yearInput = '';
    this.launchSuccess = null;
    this.landSuccess = null;
    this.filtersChanged.emit({});
  }
}
