import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-elements-home',
  templateUrl: './elements-home.component.html',
  styleUrls: ['./elements-home.component.scss']
})
export class ElementsHomeComponent implements OnInit {

  title:string = 'PlaceHolderComponent';
  
  constructor() { }

  ngOnInit(): void {
  }

}