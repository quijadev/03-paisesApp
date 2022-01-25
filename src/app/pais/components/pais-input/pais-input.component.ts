import { Component, EventEmitter, Output, OnInit, Input } from '@angular/core';
import { Subject } from 'rxjs';
import { debounceTime } from 'rxjs/operators';

@Component({
  selector: 'app-pais-input',
  templateUrl: './pais-input.component.html'
})

export class PaisInputComponent implements OnInit {

  @Output() onEnter: EventEmitter<string> = new EventEmitter();
  @Output() onDebounce: EventEmitter<string> = new EventEmitter();
  @Input() placeholder: string = '';

  debouncer: Subject<string> = new Subject();

  term: string = '';

  ngOnInit(): void {
    this.debouncer.pipe(
      debounceTime(500)
    ).subscribe( valor => {
      this.onDebounce.emit(valor);
    })
  }

  buscar() {
    this.onEnter.emit(this.term);
    
  }

  teclaPresionada( ){
    this.debouncer.next(this.term);
  }
}

