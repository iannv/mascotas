import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VeterinariasRoutingModule } from './veterinarias-routing.module';
import { MasCercanasComponent } from './mas-cercanas/mas-cercanas.component';
import { ADomicilioComponent } from './a-domicilio/a-domicilio.component';
import { DeGuardiaComponent } from './de-guardia/de-guardia.component';
import { VeterinariaComponent } from './veterinaria/veterinaria.component';
import { VeterinariasComponent } from './veterinarias/veterinarias.component';
import { VetItemComponent } from './vet-item/vet-item.component';
import { VetItemGuardiaComponent } from './vet-item-guardia/vet-item-guardia.component';
import { VetItemAdomicilioComponent } from './vet-item-adomicilio/vet-item-adomicilio.component';


@NgModule({
  declarations: [
    MasCercanasComponent,
    ADomicilioComponent,
    DeGuardiaComponent,
    VeterinariaComponent,
    VeterinariasComponent,
    VetItemComponent,
    VetItemGuardiaComponent,
    VetItemAdomicilioComponent
  ],
  imports: [
    CommonModule,
    VeterinariasRoutingModule
  ],
  exports: [
    VetItemComponent
  ]
})
export class VeterinariasModule { }
