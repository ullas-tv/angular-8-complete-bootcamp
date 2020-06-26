import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-collections-home',
  templateUrl: './collections-home.component.html',
  styleUrls: ['./collections-home.component.scss']
})
export class CollectionsHomeComponent implements OnInit {

  data = [
    {name:"Ullas", age:25, job:"Software Engineer"},
    {name:"James", age:26, job:"Designer"},
    {name:"Kelly", age:23, job:"Engineer"}
  ];

  headers = [
    {key:"name", label:"Name"},
    {key:"age", label:"Age"},
    {key:"job", label:"Job"}
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
