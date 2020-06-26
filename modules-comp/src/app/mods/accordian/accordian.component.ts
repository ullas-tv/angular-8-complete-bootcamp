import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-accordian',
  templateUrl: './accordian.component.html',
  styleUrls: ['./accordian.component.scss']
})
export class AccordianComponent implements OnInit {

  @Input('items') items =[];
  openedIndex = -1;

  constructor() { }

  ngOnInit(): void {
  }

  onClickOpen(index:number){
    index === this.openedIndex ? this.openedIndex = -1 : this.openedIndex = index;
  }
}
