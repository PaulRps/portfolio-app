import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { JobExperience } from 'src/app/shared/models/dto/job-experience.dto';
import { environment } from 'src/environments/environment';

const API_URL = `${environment.apiUrl}/job-experiences`

@Injectable({
  providedIn: 'root'
})
export class ExperienceService {

  constructor(private readonly http: HttpClient) { }

  getJobExperiences(): Observable<JobExperience[]> {
    return this.http.get<JobExperience[]>(`${API_URL}`)
  }
}
