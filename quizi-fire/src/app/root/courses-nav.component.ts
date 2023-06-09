import { ChangeDetectionStrategy, Component, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { SourceService } from '../services/source.service';
import { MenuService } from '../services/menu.service';
// import { MatSidenav } from '@angular/material/sidenav';

@Component({
  selector: 'app-courses-nav',
  templateUrl: './courses-nav.component.html',
  styleUrls: ['./courses-nav.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CoursesNavComponent {
  // @ViewChild(MatSidenav) sidenav!: MatSidenav;
  courses = this.sourceService.getCourseTileList();

  constructor(
    private router: Router,
    private sourceService: SourceService,
    public menuService: MenuService
  ) {}

  openCourse(courseId: string) {
    this.router.navigate(['/course'], { queryParams: { id: courseId } });
  }
}