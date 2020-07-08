import { Component } from "@angular/core";
import { WikiService } from "./wiki.service";
import { WikiResults } from "./models/wiki-results";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent {
  pages = [];

  constructor(private wikiService: WikiService) {}

  onTerm(event: string) {
    this.wikiService.search(event).subscribe((pages) => {
      this.pages = pages;
    });
  }
}
