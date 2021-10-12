import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AboutService } from '../../about.service';

@Injectable({
  providedIn: 'root'
})
export class DownloadResumeService {

  constructor(private readonly aboutService: AboutService) { }

  download(): Observable<Blob> {
    return this.aboutService.getResume()
  }
}
