import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MyDutiesPage } from './my-duties.page';

const routes: Routes = [
  {
    path: '',
    component: MyDutiesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MyDutiesPageRoutingModule {}
