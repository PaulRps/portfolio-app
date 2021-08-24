import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';
import { TitleComponent } from './components/title/title.component';
import { EducationRoutingModule } from './education-routing.module';
import { EducationPageComponent } from './page/education-page.component';



@NgModule({
  declarations: [
    EducationPageComponent,
    TitleComponent
  ],
  imports: [
    CommonModule,
    EducationRoutingModule,
    SharedModule
  ],
  exports: [
    EducationPageComponent
  ]
})
export class EducationModule { }
