import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

import { ProjectsComponent } from './projects/projects.component';
import { CategoriesComponent } from './categories/categories.component';
import { TagsComponent } from './tags/tags.component';

import { Project } from './models/project';
import { Category } from './models/category';
import { Tag } from './models/tag';

import { ProjectFilterPipe } from './project-filter.pipe';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    ProjectFilterPipe,
    ProjectsComponent,
    CategoriesComponent,
    TagsComponent,
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'Portfolio';
  year = new Date().getFullYear();
  author = 'Carissa Ward';

  categoryFilter: Category | undefined;
  tagFilter: Tag | undefined;

  // Method to set category filter
  setCategoryFilter(category: Category): void {
    if (this.categoryFilter === category) {
      // If the current categoryFilter is the same as the clicked category, remove the filter
      this.categoryFilter = undefined;
    } else {
      // Set the clicked category as the new filter
      this.categoryFilter = category;
    }
  }

  // Method to set tag filter
  setTagFilter(tag: Tag): void {
    if (this.tagFilter === tag) {
      // If the current tagFilter is the same as the clicked tag, remove the filter
      this.tagFilter = undefined;
    } else {
      // Set the clicked tag as the new filter
      this.tagFilter = tag;
    }
  }

  // Method to clear both category and tag filters
  clearFilters(): void {
    this.categoryFilter = undefined;
    this.tagFilter = undefined;
  }

  // TrackBy function for *ngFor
  trackByFn(index: number, project: Project): number {
    return project.id;
  }
}