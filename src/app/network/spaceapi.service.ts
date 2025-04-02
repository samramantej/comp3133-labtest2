import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SpaceapiService {
  private baseUrl = 'https://api.spacexdata.com/v3/launches';

  constructor(private http: HttpClient) {}

  // Get all missions
  getAllMissions(): Observable<any[]> {
    return this.http.get<any[]>(this.baseUrl);
  }

  // Get missions by launch year
  getMissionsByYear(year: string): Observable<any[]> {
    return this.http.get<any[]>(`${this.baseUrl}?launch_year=${year}`);
  }

  // Get mission by flight number (ID)
  getMissionById(id: string): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/${id}`);
  }
}
