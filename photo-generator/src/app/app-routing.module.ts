import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { PathLocationStrategy } from "@angular/common";
import { PhotoShowComponent } from "./photo-show/photo-show.component";

const routes: Routes = [{ path: "", component: PhotoShowComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
