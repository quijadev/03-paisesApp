import { Component } from '@angular/core';
import { PaisService } from '../../services/pais.service';
import { Country } from '../../interfaces/pais-interface';

@Component({
  selector: 'app-por-pais',
  templateUrl: './por-pais.component.html',
  styles: [
  ]
})
export class PorPaisComponent {

  term: string = '';
  error: boolean=false;
  paises: Country[]=[];
  
  constructor( private _paisService: PaisService ) { }

  buscar( term: string ) {

    this.error = false;

    this._paisService.buscarPais(term).subscribe( (paises => {
      this.paises = paises;
      console.log(paises);
      
    } ), (err) => {
      this.term = term;
      this.error = true;
      this.paises = [];
      console.log(err);
    });

  }

  suggest( term: string) {
    this.error = false;
    //TODO crear sugerencias
  }

}
