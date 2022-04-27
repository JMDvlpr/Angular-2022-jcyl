import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-centro',
  template: `<div>
                Centro:{{centro}}
             </div>`,
  styleUrls: ['./centro.component.css']
})
export class CentroComponent implements OnInit {

centro:string = 'Centro Estudios JMDvlpr';

  constructor() { }

  ngOnInit(): void {
  }

}
