import { Component, EventEmitter, OnInit, ViewEncapsulation, Input, Output } from '@angular/core';

@Component({
  selector: 'app-hello',
  template: `
    <p (click)="clicked.emit(name)">
      hello {{name}}!
    </p>
    <ng-content></ng-content>
  `,
  styles: [],
  encapsulation: ViewEncapsulation.Native
})
export class HelloComponent implements OnInit {

  @Input() name;
  @Output() clicked = new EventEmitter;

  constructor() { }

  ngOnInit() {
  }

}
