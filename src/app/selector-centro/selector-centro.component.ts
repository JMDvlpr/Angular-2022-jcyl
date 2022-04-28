import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'selector-centro',
  templateUrl: './selector-centro.component.html',
  styleUrls: ['./selector-centro.component.css']
})
export class SelectorCentroComponent {

  centroSeleccionado= {nombre: ''};
  centros = [{nombre: "Fernando de Rojas"}, {nombre: "Agustinas"}];
  centrosFiltrados: any = [];

  constructor() {

  }

  centro($event: any) {
    this.centrosFiltrados = [...this.centros].filter(centro => centro.nombre.toLowerCase().includes($event.target.value.toLowerCase()))
  }

  seleccionarCentro(centro: any) {
    this.centroSeleccionado = centro;
    this.centrosFiltrados = [];
  }
}
