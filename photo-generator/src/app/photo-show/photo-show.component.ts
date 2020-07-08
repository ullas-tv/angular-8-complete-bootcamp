import { Component, OnInit } from "@angular/core";
import { PhotoRenderService } from "../photo-render.service";
import { UnsplashResponse } from "./UnsplashResponse";

@Component({
  selector: "app-photo-show",
  templateUrl: "./photo-show.component.html",
  styleUrls: ["./photo-show.component.css"],
})
export class PhotoShowComponent implements OnInit {
  imgUr: string = "";
  constructor(private photoRenderService: PhotoRenderService) {}

  ngOnInit(): void {}

  getPhoto() {
    this.photoRenderService.getPhoto().subscribe((resp: UnsplashResponse) => {
      this.imgUr = resp.urls.regular;
    });
  }
}
