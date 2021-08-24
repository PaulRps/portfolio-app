import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomePageComponent } from './page/home-page.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { DownloadResumeComponent } from './components/download-resume/download-resume.component';
import { SocialMediasComponent } from './components/social-medias/social-medias.component';


@NgModule({
  declarations: [
    HomePageComponent,
    DownloadResumeComponent,
    SocialMediasComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    SharedModule
  ],
  exports: [
    HomePageComponent,
    DownloadResumeComponent,
    SocialMediasComponent
  ]
})
export class HomeModule { }
