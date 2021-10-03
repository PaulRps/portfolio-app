import { Component, OnInit } from '@angular/core';
import { Project } from 'src/app/shared/models/dto/project.dto';
import { ProjectsService } from '../projects.service';

@Component({
  selector: 'app-projects-page',
  templateUrl: './projects-page.component.html',
  styleUrls: ['./projects-page.component.scss']
})
export class ProjectsPageComponent implements OnInit {

  projects?: Project[]

  constructor(private projectService: ProjectsService) { }

  ngOnInit(): void {
    this.projectService.getProjects().subscribe(projects => this.projects = projects)
  }

}
