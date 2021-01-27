import { ScheduleFilterPage } from './../pages/schedule-filter/schedule-filter';
import { InspectorHomeComponent } from './inspector-home/inspector-home.component';
import { InspectorComponent } from './inspector.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CalendarComponentPage } from './calendar/calendar.component';
import { InspectorRoutingModule } from './inspector-routing.module';
import { IonicModule } from '@ionic/angular';
import { IonicStorageModule } from '@ionic/storage';
import { NgCalendarModule } from 'ionic2-calendar';
import { FormsModule } from '@angular/forms';
import { InboxComponent } from './inbox/inbox.component';
import { MyDutiesComponent } from './my-duties/my-duties.component';
import { DutyDetailComponent } from './duty-detail/duty-detail.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MapComponent } from './map/map.component';


@NgModule({
  declarations: [
    InspectorComponent,
    InspectorHomeComponent,
    CalendarComponentPage,
    InboxComponent,
    MyDutiesComponent,
    DutyDetailComponent,
    DashboardComponent,
    MapComponent
  ],
  imports: [
    CommonModule,
    NgCalendarModule,
    FormsModule,
    InspectorRoutingModule,
    IonicModule.forRoot(),
    IonicStorageModule.forRoot(),
  ]
})
export class InspectorModule { }
