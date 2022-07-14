import { RouterModule } from "@angular/router";
import { CourseInfoComponent } from "./course-info.component";
import { CourseListComponent } from "./course-list.componet";
import { NgModule } from "@angular/core";
import { NotFoundComponent } from "../not-found/not-found.component";
import { FormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";
import { StarComponent } from "../star/star.component";

@NgModule({
  declarations: [CourseListComponent, CourseInfoComponent, StarComponent],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild([
      { path: "courses", component: CourseListComponent },
      { path: "courses/info/:id", component: CourseInfoComponent },
    ]),
  ],
})
export class CourseModule {}
