import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ExperienceRoutingModule } from './experience-routing.module';
import { ExperiencePageComponent } from './page/experience-page.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { JobComponent } from './components/job/job.component';


@NgModule({
  declarations: [
    ExperiencePageComponent,
    JobComponent
  ],
  imports: [
    CommonModule,
    ExperienceRoutingModule,
    SharedModule
  ],
  exports: [
    ExperiencePageComponent
  ]
})
export class ExperienceModule { }
