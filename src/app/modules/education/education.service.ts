import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Title } from 'src/app/shared/models/dto/title.dto';

@Injectable({
  providedIn: 'root'
})
export class EducationService {

  constructor() { }

  getTitles(): Observable<Title[]> {
    return new Observable(observer => {
      observer.next([
        { name: 'UFPB', institution: 'Msc Computer Scienci', beginDate: 'dez 2020', endDate: 'current', description: 'saflasdf  asdlfjaslf asf ladsfjasfjldsfjds as fljds' },
        { name: 'UFPB', institution: 'Msc Computer Scienci', beginDate: 'dez 2020', endDate: 'current', description: 'saflasdf  asdlfjaslf asf ladsfjasfjldsfjds as fljds' },
        { name: 'UFPB', institution: 'Msc Computer Scienci', beginDate: 'dez 2020', endDate: 'current', description: 'saflasdf  asdlfjaslf asf ladsfjasfjldsfjds as fljds' },
        { name: 'UFPB', institution: 'Msc Computer Scienci', beginDate: 'dez 2020', endDate: 'current', description: 'saflasdf  asdlfjaslf asf ladsfjasfjldsfjds as fljds' },
        { name: 'UFPB', institution: 'Msc Computer Scienci', beginDate: 'dez 2020', endDate: 'current', description: 'saflasdf  asdlfjaslf asf ladsfjasfjldsfjds as fljds' },
      ])
      observer.complete()
    })
  }
}
