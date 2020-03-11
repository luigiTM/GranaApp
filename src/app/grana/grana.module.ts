import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GranaPageRoutingModule } from './grana-routing.module';

import { GranaPage } from './grana.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GranaPageRoutingModule
  ],
  declarations: [GranaPage]
})
export class GranaPageModule {}
