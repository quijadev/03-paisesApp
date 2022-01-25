import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap, tap } from "rxjs/operators";

import { Country } from '../../interfaces/pais-interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-ver-pais',
  templateUrl: './ver-pais.component.html',
  styles: [
  ]
})
export class VerPaisComponent implements OnInit {

  pais!: Country;

  constructor(private _activatedRoute: ActivatedRoute, private _paisService: PaisService) { }

  ngOnInit(): void {

    this._activatedRoute.params.pipe(
      switchMap( ({ id }) => this._paisService.buscarCodigo(id) ), tap(console.log)
    )
    .subscribe( pais => this.pais = pais[0]);

  }

}
