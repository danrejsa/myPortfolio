import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { EducationComponent } from './education/education.component';
import { SkillComponent } from './skill/skill.component';
import { AwardComponent } from './award/award.component';
import { ProjectComponent } from './project/project.component';



const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/' },
  {
    path:'',
  component: HomeComponent
  }, 
  {
    path:'education',
  component: EducationComponent
  },
  {
  path:'skill',
  component: SkillComponent
  },
  {
    path:'award',
  component: AwardComponent
  },
  {
  path:'project',
  component: ProjectComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
