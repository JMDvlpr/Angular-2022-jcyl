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

   solicitudes = [{nombre:"anonimous",apellidos:"Gonzalez",nacimiento:"01/01/1975"}];
   nombreCentro = "Garcilaso de la Vega";


  constructor(solicitudService: SolicitudesService) {

    this.solicitudes = solicitudService.getSolicitudes();


    /*
    setInterval(()=>{
      this.solicitud.nombre = ''+ Math.random();
    },2000);

    //<p [style.color]="+solicitud.nombre>0.5?'red':'blue'">{{solicitud.nombre}} {{solicitud.apellidos}}</p>
*/
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
    this.solicitudes = this.solicitudes.filter(solicitudExistente => solicitudExistente.nombre != solicitud.nombre)
  }

}
