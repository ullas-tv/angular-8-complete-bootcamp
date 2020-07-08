import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { UnsplashResponse } from "./photo-show/UnsplashResponse";

@Injectable({
  providedIn: "root",
})
export class PhotoRenderService {
  constructor(private http: HttpClient) {}

  getPhoto() {
    return this.http.get<UnsplashResponse>(
      "https://api.unsplash.com/photos/random",
      {
        headers: {
          Authorization:
            "Client-ID JV4taDT0uwIK7cyonDy7jRm8yy9BKD-i-C5aqpy6gn4",
        },
      }
    );
  }
}
