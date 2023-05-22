import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import {
  Component
} from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { Router, RouterModule } from '@angular/router';
import { ProjectCardComponent } from './components/project-card/project-card.component';
import { HorizontalScrollDirective } from './../../shared/directives/horizontal-scroll.directive';
import { Project } from './../../shared/interfaces/project';
import { ProjectService } from './../../shared/services/project.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    HttpClientModule,
    ProjectCardComponent,
    RouterModule,
    HorizontalScrollDirective
  ],
  providers: [ProjectService],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  projects = toSignal(this.project.getProjects());

  constructor(private project: ProjectService, private router: Router) {}

  public goToProject(project: Project) {
    this.router.navigate([project.id]);
    this.project.selectProject(project);
  }
}
