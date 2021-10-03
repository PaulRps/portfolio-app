import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'about', loadChildren: () => import('./modules/about/about.module').then((m) => m.AboutModule) },
  { path: 'education', loadChildren: () => import('./modules/education/education.module').then((m) => m.EducationModule) },
  { path: 'experience', loadChildren: () => import('./modules/experience/experience.module').then((m) => m.ExperienceModule) },
  { path: 'projects', loadChildren: () => import('./modules/projects/projects.module').then((m) => m.ProjectsModule) },
  { path: '', redirectTo: '/about', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
