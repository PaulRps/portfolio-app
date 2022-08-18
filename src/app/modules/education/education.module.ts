import {CommonModule} from '@angular/common'
import {NgModule} from '@angular/core'
import {SharedModule} from 'src/app/shared/shared.module'
import {EducationComponent} from './components/education/education.component'
import {EducationRoutingModule} from './education-routing.module'
import {EducationPageComponent} from './page/education-page.component'

@NgModule({
  declarations: [EducationPageComponent, EducationComponent],
  imports: [CommonModule, EducationRoutingModule, SharedModule],
  exports: [EducationPageComponent]
})
export class EducationModule {}
