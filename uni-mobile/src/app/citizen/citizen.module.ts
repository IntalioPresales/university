import { Page2Component } from './../inspector/page2/page2.component';
import { ActiveRequestsComponent } from './active-requests/active-requests.component';
import { RequestTimelineComponent } from './request-timeline/request-timeline.component';
import { CitizenPage2Component } from './citizen-page-2/citizen-page-2.component';
import { CitizenComponent } from './citizen.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CitizenRoutingModule } from './citizen-routing.module';
import { IonicModule } from '@ionic/angular';
import { IonicStorageModule } from '@ionic/storage';
import { HomeComponent } from './home/home.component';
import { ArchiveComponent } from './archive/archive.component';
import { NewRequestSelectionComponent } from './new-request-selection/new-request-selection.component';
import { NewRequestDetailsComponent } from './new-request-details/new-request-details.component';
import { NewRequestFormComponent } from './new-request-form/new-request-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
// import filepond module
import { FilePondModule, registerPlugin } from 'ngx-filepond';


import {
  MatTableModule,
  MatStepperModule,
  MatExpansionModule,
  MatButtonModule,
  MatFormFieldModule,
  MatInputModule,
  MatOptionModule,
  MatSelectModule,
  MatIconModule,
  MatPaginatorModule,
  MatSortModule
} from "@angular/material";
import { NgCalendarModule } from 'ionic2-calendar';
import { CalendarComponentPage } from './calendar/calendar.component';
import { RequestReviewComponent } from './request-review/request-review.component';
import { MunicipalityCircularComponent } from './municipality-circular/municipality-circular.component';
import { CitizenHomePageComponent } from './citizen-home-page/citizen-home-page.component';
import { PreloadImageComponent } from './preload-image/preload-image.component';
import { GradesComponent } from './grades/grades.component';
@NgModule({
  declarations: [
    Page2Component,
    CitizenComponent,
    HomeComponent,
    PreloadImageComponent,
    CalendarComponentPage,
    CitizenPage2Component,
    ArchiveComponent,
    NewRequestSelectionComponent,
    NewRequestDetailsComponent,
    NewRequestFormComponent,
    RequestTimelineComponent,
    RequestReviewComponent,
    ActiveRequestsComponent,
    MunicipalityCircularComponent,
    CitizenHomePageComponent,
    GradesComponent
  ],
  imports: [
    MatTableModule,
    MatExpansionModule,
    MatStepperModule,
    MatButtonModule,
    NgCalendarModule,
    FilePondModule,
    MatFormFieldModule,
    MatInputModule,
    MatOptionModule,
    MatSelectModule,
    MatIconModule,
    MatPaginatorModule,
    MatSortModule,
    ReactiveFormsModule,
    CommonModule,
    CitizenRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule.forRoot(),
    IonicStorageModule.forRoot(),
  ],
  exports: [
    PreloadImageComponent
  ],
})
export class CitizenModule { }
