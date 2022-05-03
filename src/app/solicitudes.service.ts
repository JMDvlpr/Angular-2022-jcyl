import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SolicitudesService {

  solicitudes = [{nombre:"Javier",apellidos:"Gamarra",nacimiento:"01/01/1975"},{nombre:"Juan",apellidos:"Martín Dominguezng",nacimiento:"11/12/1990"}];

  constructor(private httpClient: HttpClient) { }

  getSolicitudes(){
      const accessToken = 'w553KmY_mhtkpRngkuh6qoYMPc-McVjwAjSNbQ0IxNs';
      return this.httpClient.get(
      `https://cdn.contentful.com/spaces/im9x7su136k8/environments/master/entries?access_token=${accessToken}`)
      .toPromise();

  }
}
