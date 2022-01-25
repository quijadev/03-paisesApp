import { Component } from '@angular/core';
import { Country } from '../../interfaces/pais-interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-capital',
  templateUrl: './por-capital.component.html',
  styles: [
  ]
})
export class PorCapitalComponent {

  term: string = '';
  error: boolean = false;
  paises: Country[]=[];

  constructor(private _paisService: PaisService) { }

  buscar( term: string) {
    
    this.error = false; 

    this._paisService.buscarCapital(term).subscribe( (resp => {
      this.paises = resp;
      console.log(resp);
    }), (err) => {
      this.term = term;
      this.error = true;
      this.paises = [];
      console.log(err);
    });

  }

  suggest( term: string) {
    // this.error = false;
    //TODO crear sugerencias
  }

}
