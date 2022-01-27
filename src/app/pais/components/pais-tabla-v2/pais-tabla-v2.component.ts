import { Component, Input } from '@angular/core';
import { Country } from '../../interfaces/pais-interface';

@Component({
  selector: 'app-pais-tabla-v2',
  templateUrl: './pais-tabla-v2.component.html'
})
export class PaisTablaV2Component {
  
  @Input() paises: Country[] = [];

  constructor() { }

}
