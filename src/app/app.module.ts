import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { HomeComponent } from './home/home.component';
import { EducationComponent } from './education/education.component';
import { SkillComponent } from './skill/skill.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgxPageScrollCoreModule } from 'ngx-page-scroll-core';
import {Ng2PageScrollModule} from 'ng2-page-scroll';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { AwardComponent } from './award/award.component';
import { ProjectComponent } from './project/project.component';
//import {NgbCarouselConfig} from '@ng-bootstrap/ng-bootstrap';


@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    HomeComponent,
    EducationComponent,
    SkillComponent,    
    LandingPageComponent,
    AwardComponent,
    ProjectComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NgxPageScrollCoreModule,
    Ng2PageScrollModule,
   // NgbCarouselConfig
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
