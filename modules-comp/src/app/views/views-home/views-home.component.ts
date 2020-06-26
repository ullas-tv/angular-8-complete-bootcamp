import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-views-home',
  templateUrl: './views-home.component.html',
  styleUrls: ['./views-home.component.scss']
})
export class ViewsHomeComponent implements OnInit {

  stats = [
    {value:22, label:"# No of Users"},
    {value:900, label:"Revenue"},
    {value:50, label:"Reviews"}
  ];

  itemList = [
    {image:"/assets/images/couch.jpeg", title:"Couch", description: "This is a Fantastic Couch to Sit On"},
    {image:"/assets/images/dresser.jpeg", title:"Dresser",description:"An Affordable Dresser to put up your stufs with ease"}
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
