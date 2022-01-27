import { Component } from '@angular/core';
import { PaisService } from '../../services/pais.service';
import { Country } from '../../interfaces/pais-interface';

@Component({
  selector: 'app-por-pais',
  templateUrl: './por-pais.component.html',
  styles: [
    `
    li {
      cursor: pointer;
    }
    `
  ]
})
export class PorPaisComponent {

  term            : string = '';
  error           : boolean=false;
     
  paises          : Country[]=[];  
  sugerencias     : Country[]=[];
 
  showSuggestions : boolean = false;
  
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
    this.term = term;
    this.showSuggestions = true;
    
    this._paisService.buscarPais(term).subscribe(paises => 
      this.sugerencias = paises.splice(0,5),
      (err) => this.sugerencias = []
    )
  }

  buscarSugerido(term: string) {
    this.buscar(term)
  }
}
