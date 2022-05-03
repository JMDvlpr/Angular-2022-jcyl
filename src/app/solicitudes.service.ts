import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SolicitudesService {

  solicitudes = [{nombre:"Javier",apellidos:"Gamarra",nacimiento:"01/01/1975"},{nombre:"Juan",apellidos:"Martín Dominguez",nacimiento:"11/12/1990"}];

  constructor() { }

  getSolicitudes(){
    return this.solicitudes;
  }
}
