import {NgModule} from '@angular/core'
import {CommonModule} from '@angular/common'

import {AboutRoutingModule} from './about-routing.module'
import {AboutPageComponent} from './pages/about/about-page.component'
import {SharedModule} from 'src/app/shared/shared.module'
import {DownloadResumeComponent} from './components/download-resume/download-resume.component'
import {SocialMediasComponent} from './components/social-medias/social-medias.component'
import {ResumeFormComponent} from './pages/resume-form/resume-form.component'
import {ReactiveFormsModule} from '@angular/forms'
import {WorkExperienceComponent} from './components/work-experience/work-experience.component'
import {ExperienceModule} from '../experience/experience.module'

@NgModule({
  declarations: [
    AboutPageComponent,
    DownloadResumeComponent,
    SocialMediasComponent,
    ResumeFormComponent,
    WorkExperienceComponent
  ],
  imports: [
    CommonModule,
    AboutRoutingModule,
    SharedModule,
    ExperienceModule,
    ReactiveFormsModule
  ],
  exports: [AboutPageComponent, DownloadResumeComponent, SocialMediasComponent]
})
export class AboutModule {}
