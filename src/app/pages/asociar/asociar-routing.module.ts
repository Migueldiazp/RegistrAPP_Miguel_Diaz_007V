import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AsociarPage } from './asociar.page';

const routes: Routes = [
  {
    path: '',
    component: AsociarPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AsociarPageRoutingModule {}
