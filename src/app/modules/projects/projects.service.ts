import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Project } from 'src/app/shared/models/dto/project.dto';
import { environment } from 'src/environments/environment';

const API_URL = `${environment.apiUrl}/projects`

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {

  constructor(private http: HttpClient) { }

  getProjects(): Observable<Project[]> {
    return this.http.get<Project[]>(`${API_URL}`)
  }
}
