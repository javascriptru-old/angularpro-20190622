import { Directive, ViewContainerRef, TemplateRef, ElementRef, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[delay]'
})
export class DelayDirective implements OnInit {

  @Input() delay: number;
  @Input() delayTime: number;

  constructor(private view: ViewContainerRef,
    private template: TemplateRef<ElementRef>) {
      

    }

  ngOnInit() {
    setTimeout(_ => {
      this.view.createEmbeddedView(this.template);
    }, this.delay);
  }   

}
