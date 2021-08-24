import { Component, OnInit } from '@angular/core';
import { JobExperience } from 'src/app/shared/models/dto/job-experience.dto';
import { ExperienceService } from '../experience.service';

@Component({
  selector: 'app-experience-page',
  templateUrl: './experience-page.component.html',
  styleUrls: ['./experience-page.component.scss']
})
export class ExperiencePageComponent implements OnInit {

  jobExperiences?: JobExperience[];
  
  constructor(private experienceService: ExperienceService) { }

  ngOnInit(): void {
    this.experienceService.getJobExperiences().subscribe(jobs => this.jobExperiences = jobs)
  }

}
