import { ProjectService } from './../../shared/services/project.service';
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-project-page',
  standalone: true,
  imports: [CommonModule, HttpClientModule],
  providers: [ProjectService],
  templateUrl: './project-page.component.html',
  styleUrls: ['./project-page.component.scss'],
})
export class ProjectPageComponent implements OnInit {
  project = this.projectService.selectedProject;

  constructor(private projectService: ProjectService) {}

  ngOnInit(): void {
    console.log(this.project());
  }
}
