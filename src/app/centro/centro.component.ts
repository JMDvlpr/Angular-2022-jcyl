import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-centro',
  template: `<div>
                Centro:{{centro}}
             </div>`,
  styleUrls: ['./centro.component.css']
})
export class CentroComponent implements OnInit {

  @Input()
  centro:string="";

  constructor() { }

  ngOnInit(): void {
  }


}
