// Importing necessary Angular modules and RxJS utilities
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

// Importing Project model and predefined projects
import { Project } from '../models/project';
import { PROJECTS } from '../data/projects'; // Assuming this file contains the predefined projects

// Injectable decorator for providing the service at root level
@Injectable({
  providedIn: 'root'
})
export class ProjectService {
  constructor() { }

  // Method to fetch all projects as an Observable
  getProjects(): Observable<Project[]> {
    // Create an Observable of the predefined projects
    const projects = of(PROJECTS);

    // Return the Observable containing projects
    return projects;
  }

  // Method to fetch a single project by its ID as an Observable
  getProject(id: number): Observable<Project | undefined> {
    // Find the project with the provided ID from the predefined projects array
    const project = PROJECTS.find((project) => project.id === id)!;

    // Return an Observable containing the found project or undefined if not found
    return of(project);
  }
}