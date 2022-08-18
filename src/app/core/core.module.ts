import {CommonModule} from '@angular/common'
import {HTTP_INTERCEPTORS} from '@angular/common/http'
import {NgModule} from '@angular/core'
import {SharedModule} from '../shared/shared.module'
import {LoadingInterceptor} from './interceptors/loading.interceptor'
import {LoadingScreenComponent} from './loading-screen/loading-screen.component'
import {LoadingService} from './loading-screen/loading.service'
import {NavbarComponent} from './navbar/navbar.component'
import {FilterProjectsPipe} from './pipes/filter/filter-projects.pipe'

@NgModule({
  declarations: [NavbarComponent, LoadingScreenComponent, FilterProjectsPipe],
  imports: [CommonModule, SharedModule],
  exports: [NavbarComponent, LoadingScreenComponent, FilterProjectsPipe],
  providers: [
    LoadingService,
    {provide: HTTP_INTERCEPTORS, useClass: LoadingInterceptor, multi: true}
  ]
})
export class CoreModule {}
