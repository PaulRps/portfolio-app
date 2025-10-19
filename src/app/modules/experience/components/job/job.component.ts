import {Component, Input, OnInit} from '@angular/core'
import {JobExperience} from 'src/app/shared/models/dto/job-experience.dto'

@Component({
  selector: 'app-job',
  templateUrl: './job.component.html',
  styleUrls: ['./job.component.scss']
})
export class JobComponent implements OnInit {
  @Input() jobExperience?: JobExperience

  constructor() {}

  ngOnInit(): void {
    console.log(this.jobExperience)
  }

  formatJobTitle(): string {
    if (!this.jobExperience) {
      return ''
    }
    const companyName = this.jobExperience.company?.name || ''
    const squad = this.jobExperience.squad
      ? `in ${this.jobExperience.squad}`
      : ''
    return `${this.jobExperience.role} ${squad}`
  }
}
