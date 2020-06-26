import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mods-home',
  templateUrl: './mods-home.component.html',
  styleUrls: ['./mods-home.component.scss'],
})
export class ModsHomeComponent implements OnInit {
  displayModal: Boolean = false;
  items = [
    { title: 'Why is Sky Blue ?', content: ' Sky is blue because it is !!' },
    {
      title: 'What does Blueberry taste like ?',
      content: ' Blueberry taste like Blueberry !!',
    },
    {
      title: 'What is the shortcut for success ?',
      content: "Go Home Dude...Your'e Drunk !!",
    },
  ];
  constructor() {}

  ngOnInit(): void {}

  showModal() {
    this.displayModal = !this.displayModal;
  }
}
