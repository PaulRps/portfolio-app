import {HttpClient} from '@angular/common/http'
import {Injectable} from '@angular/core'
import {Observable} from 'rxjs'
import {Education} from 'src/app/shared/models/dto/education.dto'
import {environment} from 'src/environments/environment'

const API_URL = `${environment.apiUrl}/education`

@Injectable({
  providedIn: 'root'
})
export class EducationService {
  constructor(private readonly http: HttpClient) {}

  getTitles(): Observable<Education[]> {
    return this.http.get<Education[]>(API_URL)
  }
}
