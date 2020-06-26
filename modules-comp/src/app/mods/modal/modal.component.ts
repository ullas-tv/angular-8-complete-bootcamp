import { Component, OnInit, ElementRef, OnDestroy, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit, OnDestroy {

  @Output() close = new EventEmitter();

  constructor(private eleRef: ElementRef) { }

  ngOnInit(): void {
    document.body.appendChild(this.eleRef.nativeElement);
  }

  ngOnDestroy():void {
    this.eleRef.nativeElement.remove();
  }

 onClickClose(){
  this.close.emit();
 }
 
}
