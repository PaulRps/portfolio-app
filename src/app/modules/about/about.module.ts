import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AboutRoutingModule } from './about-routing.module';
import { AboutPageComponent } from './page/about-page.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { DownloadResumeComponent } from './components/download-resume/download-resume.component';
import { SocialMediasComponent } from './components/social-medias/social-medias.component';


@NgModule({
  declarations: [
    AboutPageComponent,
    DownloadResumeComponent,
    SocialMediasComponent
  ],
  imports: [
    CommonModule,
    AboutRoutingModule,
    SharedModule
  ],
  exports: [
    AboutPageComponent,
    DownloadResumeComponent,
    SocialMediasComponent
  ]
})
export class AboutModule { }
