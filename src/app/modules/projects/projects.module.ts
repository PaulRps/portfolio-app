import {CommonModule} from '@angular/common'
import {NgModule} from '@angular/core'
import {FormsModule} from '@angular/forms'
import {CoreModule} from 'src/app/core/core.module'
import {SharedModule} from 'src/app/shared/shared.module'
import {ProjectComponent} from './components/project/project.component'
import {ProjectsPageComponent} from './page/projects-page.component'
import {ProjectsRoutingModule} from './projects-routing.module'

@NgModule({
  declarations: [ProjectsPageComponent, ProjectComponent],
  imports: [
    CommonModule,
    ProjectsRoutingModule,
    SharedModule,
    CoreModule,
    FormsModule
  ]
})
export class ProjectsModule {}
