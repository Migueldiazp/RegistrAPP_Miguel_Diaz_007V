import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InfoDocentePageRoutingModule } from './info-docente-routing.module';

import { InfoDocentePage } from './info-docente.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InfoDocentePageRoutingModule
  ],
  declarations: [InfoDocentePage]
})
export class InfoDocentePageModule {}
