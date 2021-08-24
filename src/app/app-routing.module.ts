import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'home', loadChildren: () => import('./modules/home/home.module').then((m) => m.HomeModule) },
  { path: 'education', loadChildren: () => import('./modules/education/education.module').then((m) => m.EducationModule) },
  { path: 'experience', loadChildren: () => import('./modules/experience/experience.module').then((m) => m.ExperienceModule) },
  { path: 'projects', loadChildren: () => import('./modules/projects/projects.module').then((m) => m.ProjectsModule) },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
