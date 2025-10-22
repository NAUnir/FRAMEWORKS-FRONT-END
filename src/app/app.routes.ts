import { Routes } from '@angular/router';
import { PreciosComponent } from '../app/precios/precios.component';
import { SoporteClientesComponent } from '../app/soporte-clientes/soporte-clientes.component';
import { FormularioSuscripcionComponent } from './formulario-suscripcion/formulario-suscripcion.component';

export const routes: Routes = [
  { path: 'home', component: PreciosComponent },
  { path: 'soporte', component: SoporteClientesComponent },
  { path: 'suscripcion', component: FormularioSuscripcionComponent },
  { path: '', component: PreciosComponent },
];
