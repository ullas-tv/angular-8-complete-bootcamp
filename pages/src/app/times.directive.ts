import { Directive, TemplateRef, ViewContainerRef, Input } from '@angular/core';

@Directive({
  selector: '[appTimes]',
})
// Structural Directive
export class TimesDirective {
  constructor(
    private templateRef: TemplateRef<any>,
    private viewContainer: ViewContainerRef
  ) {}

  @Input() set render(times:number){

    this.viewContainer.clear();

    for(let i=0;i<times;i++){
      this.viewContainer.createEmbeddedView(this.templateRef,{
        index: i
      });
    }
  }
}
