import {Component, Input, OnInit} from '@angular/core'
import {Project} from 'src/app/shared/models/dto/project.dto'

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss']
})
export class ProjectComponent implements OnInit {
  @Input() project?: Project

  constructor() {}

  ngOnInit(): void {}
}
