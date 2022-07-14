import { CoreModule } from "./core/core.module";
import { NotFoundComponent } from "./core/component/not-found/not-found.component";
import { NavBarComponent } from "./core/component/nav-bar/nav-bar.component";
import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { AppComponent } from "./app.component";
import { RouterModule } from "@angular/router";
import { HttpClientModule } from "@angular/common/http";
import { CourseModule } from "./courses/ course.module";

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    CourseModule,
    CoreModule,
    RouterModule.forRoot([
      { path: "", redirectTo: "courses", pathMatch: "full" },
    ]),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
