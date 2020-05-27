import { Directive, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[appClass]',
})
//custom attribute directive
export class ClassDirective {

  constructor(private element: ElementRef) {  
  }

  @Input('appClass') set classNames(classObj:any){
    for(let key in classObj){
      if(classObj[key]){
      this.element.nativeElement.classList.add(key);
    } else {
      this.element.nativeElement.classList.remove(key);
    }
  }
  }
}

//Commuction bw parent and child
/*
Parent Component Template
  <app-card [title]=" 'snowy mountain'"></app-card>

Child Component Ts file
@Input() title:string = ''; 
*/
