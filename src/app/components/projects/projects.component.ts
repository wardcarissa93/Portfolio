// Importing necessary Angular modules and classes
import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common'; // CommonModule for browser-independent features
import { Router } from '@angular/router'; // Router for navigation

// Importing models and services
import { Category } from '../../models/category';
import { Tag } from '../../models/tag';
import { Project } from '../../models/project';
import { ProjectService } from '../../services/project.service'; // ProjectService for project-related operations

// Importing custom pipes and components
import { ProjectFilterPipe } from '../../pipes/project-filter.pipe'; // Custom pipe for filtering projects
import { ProjectComponent } from '../project/project.component'; // Project detail component
import { CategoriesComponent } from '../categories/categories.component'; // Categories component
import { TagsComponent } from '../tags/tags.component'; // Tags component
import { FishComponent } from '../fish/fish.component'; // Fish component
import { ReverseFishComponent } from '../reverse-fish/reverse-fish.component'; // Reverse fish component
import { Fish2Component } from '../fish-2/fish-2.component'; // Fish2 component
import { ReverseFish2Component } from '../reverse-fish-2/reverse-fish-2.component'; // Reverse fish2 component

// Component decorator with selector, template, and styles
@Component({
  selector: 'app-projects', // Selector for the component in HTML
  standalone: true, // Indicates that this component is standalone and does not depend on external state
  imports: [
    CommonModule, // Importing CommonModule for browser-independent features
    ProjectFilterPipe, // Custom pipe for filtering projects
    ProjectComponent, // Project detail component
    CategoriesComponent, // Categories component
    TagsComponent, // Tags component
    FishComponent, // Fish component
    Fish2Component, // Fish2 component
    ReverseFishComponent, // Reverse fish component
    ReverseFish2Component, // Reverse fish2 component
  ],
  templateUrl: './projects.component.html', // Template URL for the component
  styleUrl: './projects.component.scss', // Style URL for the component
})
export class ProjectsComponent implements OnInit {
  constructor(
    private projectService: ProjectService, // Injecting ProjectService for project-related operations
    private router: Router, // Injecting Router for navigation
  ) {}

  // Define a variable to track filter visibility
  filtersVisible = false;

  projects: Project[] = []; // Array to store projects

  // Method to fetch projects from the ProjectService
  getProjects(): void {
    this.projectService
      .getProjects()
      .subscribe((projects) => (this.projects = projects)); // Subscribe to get the projects data
  }

  ngOnInit(): void {
    this.getProjects(); // Fetch projects on component initialization
  }

  // Input and output properties for category and tag filters
  @Input() categoryFilter: Category | undefined;
  @Output() newCategoryFilterEvent = new EventEmitter<Category>();
  @Input() tagFilter: Tag | undefined;
  @Output() newTagFilterEvent = new EventEmitter<Tag>();

  // Method to set category filter
  setCategoryFilter(category: Category): void {
    if (this.categoryFilter === category) {
      this.categoryFilter = undefined; // Remove the filter if already selected
      this.newCategoryFilterEvent.emit(undefined); // Emit event for filter change
    } else {
      this.categoryFilter = category; // Set the selected category as filter
      this.newCategoryFilterEvent.emit(category); // Emit event for filter change
    }
  }

  // Method to set tag filter
  setTagFilter(tag: Tag): void {
    if (this.tagFilter === tag) {
      this.tagFilter = undefined; // Remove the filter if already selected
      this.newTagFilterEvent.emit(undefined); // Emit event for filter change
    } else {
      this.tagFilter = tag; // Set the selected tag as filter
      this.newTagFilterEvent.emit(tag); // Emit event for filter change
    }
  }

  // Method to clear all filters
  clearFilters() {
    this.categoryFilter = undefined; // Clear category filter
    this.tagFilter = undefined; // Clear tag filter
  }

  // Method to toggle filters visibility
  toggleFilters(): void {
    this.filtersVisible = !this.filtersVisible; // Toggle filter visibility
  }

  // Input and output properties for selected project
  @Input() selectedProject: Project | undefined;
  @Output() newSelectedProjectEvent = new EventEmitter<Project>();

  // Method to select a project and navigate to its detail page
  setSelectedProject(project: Project): void {
    this.projectService.getProject(project.id).subscribe(
      (projectData) => {
        if (projectData) {
          this.selectedProject = projectData; // Set the selected project
          this.newSelectedProjectEvent.emit(projectData); // Emit event for new selected project
          this.router.navigate(['/projects', projectData.id]); // Navigate to project detail page
        } else {
          console.error(`Project with id ${project.id} not found.`);
        }
      },
      (error: any) => {
        console.error('Error occurred while fetching project:', error);
      }
    );
  }

  // TrackBy function for *ngFor to improve rendering performance
  trackByFn(index: number, project: Project): number {
    return project.id; // Return the project ID for tracking
  }
}
