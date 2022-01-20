import { Component, OnInit } from '@angular/core';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-pais',
  templateUrl: './por-pais.component.html',
  styles: [
  ]
})
export class PorPaisComponent {

  term: string = '';
  
  constructor( private _paisService: PaisService ) { }

  buscar(  ) {

    console.log(this.term);

    this._paisService.buscarPais(this.term).subscribe( resp => {
      console.log(resp);
    } );

  }

}
