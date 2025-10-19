import {NgModule} from '@angular/core'
import {RouterModule, Routes} from '@angular/router'
import {AboutPageComponent} from './pages/about/about-page.component'
import {ResumeFormComponent} from './pages/resume-form/resume-form.component'

const routes: Routes = [
  {path: '', component: AboutPageComponent},
  {path: 'resume-form', component: ResumeFormComponent}
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AboutRoutingModule {}
