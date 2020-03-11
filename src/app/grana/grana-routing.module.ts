import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GranaPage } from './grana.page';

const routes: Routes = [
  {
    path: '',
    component: GranaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GranaPageRoutingModule {}
