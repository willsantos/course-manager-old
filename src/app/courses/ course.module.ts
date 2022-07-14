import { StarModule } from './../shared/component/star/star.module';
import { RouterModule } from "@angular/router";
import { CourseInfoComponent } from "./course-info.component";
import { CourseListComponent } from "./course-list.componet";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";

@NgModule({
  declarations: [CourseListComponent, CourseInfoComponent],
  imports: [
    CommonModule,
    FormsModule,
    StarModule,
    RouterModule.forChild([
      { path: "courses", component: CourseListComponent },
      { path: "courses/info/:id", component: CourseInfoComponent },
    ]),
  ],
})
export class CourseModule {}
