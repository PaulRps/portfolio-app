import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

const API_URL = `${environment.apiUrl}/about`

@Injectable({
  providedIn: 'root'
})
export class DownloadResumeService {

  constructor(private readonly http: HttpClient) { }

  download(): Observable<Blob> {
    return this.http.get(`${API_URL}/resume`, { responseType: 'blob' })
      .pipe(map((resume: any) => {
        return new Blob([resume], { type: 'application/pdf' })
      }))
  }
}
