import { Component, OnInit } from '@angular/core';
import { MatButton } from '@angular/material/button';

@Component({
  selector: 'app-solicitud',
  templateUrl: './solicitud.component.html',
  styleUrls: ['./solicitud.component.css']
})
export class SolicitudComponent implements OnInit {

   solicitud = {nombre:"",apellidos:"",nacimiento: new Date()};

   solicitudes = [{nombre:"Javier",apellidos:"Gamarra",nacimiento:"01/01/1975"},{nombre:"Juan",apellidos:"Martín",nacimiento:"11/12/1990"}];
   nombreCentro = "Garcilaso de la Vega";


  constructor() {

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

}
