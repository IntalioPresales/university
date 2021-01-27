import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MyDutiesPageRoutingModule } from './my-duties-routing.module';

import { MyDutiesPage } from './my-duties.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MyDutiesPageRoutingModule
  ],
  declarations: [MyDutiesPage]
})
export class MyDutiesPageModule {}
