import {HttpClient} from '@angular/common/http'
import {Injectable} from '@angular/core'
import {Observable} from 'rxjs'
import {map} from 'rxjs/operators'
import {AboutDto} from 'src/app/shared/models/dto/about.dto'
import {environment} from 'src/environments/environment'

const API_URL = `${environment.apiUrl}/about`

@Injectable({
  providedIn: 'root'
})
export class AboutService {
  constructor(private readonly http: HttpClient) {}

  getResume(): Observable<Blob> {
    return this.http.get(`${API_URL}/resume`, {responseType: 'blob'}).pipe(
      map((resume: any) => {
        return new Blob([resume], {type: 'application/pdf'})
      })
    )
  }

  getAbout(): Observable<AboutDto> {
    return this.http.get<AboutDto>(API_URL)
  }
}
