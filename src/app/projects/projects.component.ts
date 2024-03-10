import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Category } from '../models/category';
import { Tag } from '../models/tag';
import { Project } from '../models/project';

import { ProjectService } from '../project.service';

import { ProjectFilterPipe } from '../project-filter.pipe';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule, ProjectFilterPipe],
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

  categoryFilter: Category | undefined;
  tagFilter: Tag | undefined;

  setCategoryFilter(category: Category) {
    this.categoryFilter = category;
  }

  setTagFilter(tag: Tag) {
    this.tagFilter = tag;
  }

  clearFilters() {
    this.categoryFilter = undefined;
    this.tagFilter = undefined;
  }
}
