import { Component } from '@angular/core';
import { Project } from './models/project';
import { Category } from './models/category';
import { Tag } from './models/tag';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'Portfolio';
  year = new Date().getFullYear();
  author = 'Carissa Ward';
  menuOpen = false;

  categoryFilter: Category | undefined;
  tagFilter: Tag | undefined;

  selectedProject?: Project;

  setCategoryFilter(category: Category): void {
    if (this.categoryFilter === category) {
      this.categoryFilter = undefined;
    } else {
      this.categoryFilter = category;
    }
  }

  setTagFilter(tag: Tag): void {
    if (this.tagFilter === tag) {
      this.tagFilter = undefined;
    } else {
      this.tagFilter = tag;
    }
  }

  clearFilters(): void {
    this.categoryFilter = undefined;
    this.tagFilter = undefined;
  }

  setSelectedProject(project: Project): void {
    this.selectedProject = project;
  }

  clearSelectedProject() {
    this.selectedProject = undefined;
  }

  trackByFn(index: number, project: Project): number {
    return project.id;
  }

  toggleMenu(): void {
    this.menuOpen = !this.menuOpen;
  }
}
