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

  ngOnInit(): void {}
}
