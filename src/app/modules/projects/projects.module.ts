import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';
import { ProjectComponent } from './components/project/project.component';
import { ProjectsPageComponent } from './page/projects-page.component';
import { ProjectsRoutingModule } from './projects-routing.module';



@NgModule({
  declarations: [
    ProjectsPageComponent,
    ProjectComponent,
  ],
  imports: [
    CommonModule,
    ProjectsRoutingModule,
    SharedModule
  ]
})
export class ProjectsModule { }
