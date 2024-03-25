import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

import { Category } from '../../models/category';
import { Tag } from '../../models/tag';
import { Project } from '../../models/project';

import { ProjectService } from '../../services/project.service';

import { ProjectFilterPipe } from '../../project-filter.pipe';

// Import the Project Detail component so that we can use it in the template
import { ProjectComponent } from '../project/project.component';
import { CategoriesComponent } from '../categories/categories.component';
import { TagsComponent } from '../tags/tags.component';
import { FishComponent } from '../fish/fish.component';
import { Fish2Component } from '../fish-2/fish-2.component';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [
    CommonModule, 
    ProjectFilterPipe, 
    ProjectComponent,
    CategoriesComponent,
    TagsComponent,
    FishComponent,
    Fish2Component,
  ],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent implements OnInit {
  constructor(
    private projectService: ProjectService,
    private router: Router,
  ) {}

  // Define a variable to track filter visibility
  filtersVisible = false;

  projects: Project[] = [];
  getProjects(): void {
    this.projectService
      .getProjects()
      .subscribe((projects) => (this.projects = projects));
  }
  ngOnInit(): void {
    this.getProjects();
  }

  @Input() categoryFilter: Category | undefined;
  @Output() newCategoryFilterEvent = new EventEmitter<Category>();
  @Input() tagFilter: Tag | undefined;
  @Output() newTagFilterEvent = new EventEmitter<Tag>();
  // Method to set category filter
  setCategoryFilter(category: Category): void {
    if (this.categoryFilter === category) {
      // If the current categoryFilter is the same as the clicked category, remove the filter
      this.categoryFilter = undefined;
      this.newCategoryFilterEvent.emit(undefined);
    } else {
      // Set the clicked category as the filter
      this.categoryFilter = category;
      this.newCategoryFilterEvent.emit(category);
    }
  }
  // Method to set tag filter
  setTagFilter(tag: Tag): void {
    if (this.tagFilter === tag) {
      // If the current tagFilter is the same as the clicked tag, remove the filter
      this.tagFilter = undefined;
      this.newTagFilterEvent.emit(undefined);
    } else {
      // Set the clicked tag as the filter
      this.tagFilter = tag;
      this.newTagFilterEvent.emit(tag);
    }
  }
  // Method to clear all filters 
  clearFilters() {
    this.categoryFilter = undefined;
    this.tagFilter = undefined;
  }

  // Method to toggle filters visibility
  toggleFilters(): void {
    this.filtersVisible = !this.filtersVisible;
  }

  @Input() selectedProject: Project | undefined;
  @Output() newSelectedProjectEvent = new EventEmitter<Project>();
  // Method to select a project
  // setSelectedProject(project: Project): void {
  //   this.newSelectedProjectEvent.emit(project);
  //   this.router.navigate(['/projects', project.id]);
  // }
  setSelectedProject(project: Project): void {
    this.projectService.getProject(project.id).subscribe(
      (projectData) => {
        if (projectData) {
          this.selectedProject = projectData;
          this.newSelectedProjectEvent.emit(projectData);
          this.router.navigate(['/projects', projectData.id]);
        } else {
          console.error(`Project with id ${project.id} not found.`);
        }
      },
      (error: any) => {
        console.error('Error occurred while fetching project:', error);
      }
    )
  } 

  // TrackBy function for *ngFor
  trackByFn(index: number, project: Project): number {
    return project.id;
  }
}