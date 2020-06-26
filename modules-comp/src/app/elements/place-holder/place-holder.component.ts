import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-place-holder',
  templateUrl: './place-holder.component.html',
  styleUrls: ['./place-holder.component.scss']
})
export class PlaceHolderComponent implements OnInit {

  @Input('header') header = true;
  @Input('lines') lines = 3;
  
  constructor() { }

  ngOnInit(): void {
  }

}
