import { Component } from '@angular/core';

@Component({
  selector: 'app-por-region',
  templateUrl: './por-region.component.html',
  styles: [
  ]
})
export class PorRegionComponent {

  regiones: string[] = ['EU','EFTA','CARICOM','PA','AU','USAN','EEU','AL','ASEAN','CAIS','CEFTA','NAFTA','SAARC'];
  regionActiva: string = '';

  constructor() { }

  activarRegion( region: string ) {
    this.regionActiva = region;
    console.log(this.regionActiva);
    //TODO llamar servicio
  }

  getCSS( region: string ): string {
    return (region === this.regionActiva) ? 'btn btn-primary': 'btn btn-outline-primary'
  }

}
