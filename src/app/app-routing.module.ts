import { PruebaRoutingComponent } from './prueba-routing/prueba-routing.component';
import { SolicitudComponent } from './solicitud/solicitud.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: '' , component: SolicitudComponent},
  {path: 'solicitud', component: SolicitudComponent},
  {path: 'prueba/:parametro', component: PruebaRoutingComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
