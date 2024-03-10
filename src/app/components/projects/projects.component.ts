import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Category } from '../../models/category';
import { Tag } from '../../models/tag';
import { Project } from '../../models/project';

import { ProjectService } from '../../project.service';

import { ProjectFilterPipe } from '../../project-filter.pipe';

// Import the Project Detail component so that we can use it in the template
import { ProjectComponent } from '../project/project.component';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule, ProjectFilterPipe, ProjectComponent],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent {
  constructor(private projectService: ProjectService) {}

  projects: Project[] = [];
  getProjects(): void {
    this.projects = this.projectService.getProjects();
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

  @Input() selectedProject: Project | undefined;
  @Output() newSelectedProjectEvent = new EventEmitter<Project>();
  // Method to select a project
  setSelectedProject(project: Project): void {
    this.newSelectedProjectEvent.emit(project);
  }

  // TrackBy function for *ngFor
  trackByFn(index: number, project: Project): number {
    return project.id;
  }
}