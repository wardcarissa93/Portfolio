import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Project } from '../models/project';
import { PROJECTS } from '../data/projects';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {
  constructor() { }
  getProjects(): Observable<Project[]> {
    const projects = of(PROJECTS);
    return projects;
  }
  getProject(id: number): Observable<Project | undefined> {
    const project = PROJECTS.find((project) => project.id === id)!;
    return of(project);
  }
}
