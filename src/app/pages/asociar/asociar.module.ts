import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AsociarPageRoutingModule } from './asociar-routing.module';

import { AsociarPage } from './asociar.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AsociarPageRoutingModule
  ],
  declarations: [AsociarPage]
})
export class AsociarPageModule {}
