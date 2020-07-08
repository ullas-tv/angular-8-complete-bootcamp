import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { pluck } from "rxjs/operators";
import { WikiResults } from "./models/wiki-results";

@Injectable({
  providedIn: "root",
})
export class WikiService {
  private baseUrl = "https://en.wikipedia.org/w/api.php";

  constructor(private httpClient: HttpClient) {}

  search(text: string) {
    return this.httpClient
      .get<WikiResults>(this.baseUrl, {
        params: {
          action: "query",
          format: "json",
          list: "search",
          utf8: "1",
          srsearch: text,
          origin: "*",
        },
      })
      .pipe(pluck("query", "search"));
  }
}
