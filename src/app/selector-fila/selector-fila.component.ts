import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-selector-fila',
  template: `{{solicitud.nombre}} {{solicitud.apellidos}} {{solicitud.nacimiento | date: 'dd/MM/yyyy'}}
             <button (click)="borrar(solicitud)">borrar</button>`,
  styleUrls: ['./selector-fila.component.css']
})
export class SelectorFilaComponent implements OnInit {

  @Input()
  solicitud: any;

  @Output()
  solicitudBorrada = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  borrar(solicitud:any){
    this.solicitudBorrada.emit(solicitud);
  }

}

