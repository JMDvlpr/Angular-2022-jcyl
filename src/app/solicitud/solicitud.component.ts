import { SolicitudesService } from './../solicitudes.service';
import { Component, OnInit } from '@angular/core';
import { MatButton } from '@angular/material/button';

@Component({
  selector: 'app-solicitud',
  templateUrl: './solicitud.component.html',
  styleUrls: ['./solicitud.component.css']
})
export class SolicitudComponent implements OnInit {

   solicitud = {nombre:"Anonimo",apellidos:"Gonzalez",nacimiento: new Date()};

   solicitudes :any;
   nombreCentro = "Garcilaso de la Vega";


  constructor(solicitudService: SolicitudesService) {

    solicitudService.getSolicitudes().then(x => console.log(x));

  }

  ngOnInit(): void {
  }


  apellidos($event: KeyboardEvent){
    const element = $event.target as HTMLInputElement;
    this.solicitud.apellidos = element.value;
  }

  nombre($event: KeyboardEvent){
    const element = $event.target as HTMLInputElement;
    this.solicitud.nombre = element.value;
  }


  delete(){
    console.log('eliminar!');
  }

  borrarSolicitud(solicitud: any) {
    this.solicitudes = this.solicitudes.filter((solicitudExistente:any) => solicitudExistente.nombre != solicitud.nombre)
  }

}
