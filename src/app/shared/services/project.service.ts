import { Injectable, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Project } from '../interfaces/project';

@Injectable({
  providedIn: 'root',
})
export class ProjectService {
  selectedProject = signal<Project>({} as Project)

  constructor(private http: HttpClient) {}

  selectProject(project: Project) {
    this.selectedProject.set(project)
    console.log('service: '+project.name)
  }

  getProjects(): Observable<Project[]> {
    return this.http.get<Project[]>('api/projects');
  }

  getProject(): Observable<Project> {
    return this.http.get<Project>('api/project');
  }
}
