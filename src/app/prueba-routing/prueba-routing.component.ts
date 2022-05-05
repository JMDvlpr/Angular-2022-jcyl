import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-prueba-routing',
  templateUrl: './prueba-routing.component.html',
  styleUrls: ['./prueba-routing.component.css']
})
export class PruebaRoutingComponent implements OnInit {

  parametro : String = "";

  constructor(private route: ActivatedRoute) {
    route.params.subscribe(params => this.parametro = params["parametro"] )

  }

  ngOnInit(): void {
  }

}
