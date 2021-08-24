import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { JobExperience } from 'src/app/shared/models/dto/job-experience.dto';

@Injectable({
  providedIn: 'root'
})
export class ExperienceService {

  constructor() { }

  getJobExperiences(): Observable<JobExperience[]> {
    return new Observable(observer => {
      observer.next([
        { company: 'Certisign', role: 'Senior Software Engineer', beginDate: 'dez 2020', endDate: 'current', description: 'saflasdf  asdlfjaslf asf ladsfjasfjldsfjds as fljds' },
        { company: 'Certisign', role: 'Senior Software Engineer', beginDate: 'dez 2020', endDate: 'current', description: 'saflasdf  asdlfjaslf asf ladsfjasfjldsfjds as fljds' },
        { company: 'Certisign', role: 'Senior Software Engineer', beginDate: 'dez 2020', endDate: 'current', description: 'saflasdf  asdlfjaslf asf ladsfjasfjldsfjds as fljds' },
        { company: 'Certisign', role: 'Senior Software Engineer', beginDate: 'dez 2020', endDate: 'current', description: 'saflasdf  asdlfjaslf asf ladsfjasfjldsfjds as fljds' },
      ])
      observer.complete()
    })
  }
}
