import { Component, OnInit } from '@angular/core';
import { MatButton } from '@angular/material/button';

@Component({
  selector: 'app-solicitud',
  templateUrl: './solicitud.component.html',
  styleUrls: ['./solicitud.component.css']
})
export class SolicitudComponent implements OnInit {

   solicitud = {nombre:"",apellidos:""};

   solicitudes = [{nombre:"Javier",apellidos:"Gamarra"},{nombre:"Juan",apellidos:"Martín"}];
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
