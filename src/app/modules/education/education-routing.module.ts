import {NgModule} from '@angular/core'
import {RouterModule, Routes} from '@angular/router'
import {EducationPageComponent} from './page/education-page.component'

const routes: Routes = [{path: '', component: EducationPageComponent}]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EducationRoutingModule {}
