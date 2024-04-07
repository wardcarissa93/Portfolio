// Importing necessary Angular modules and classes
import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router'; // Router for navigation events
import { Project } from './models/project'; // Importing Project model
import { Category } from './models/category'; // Importing Category model
import { Tag } from './models/tag'; // Importing Tag model

// Component decorator with selector, template, and styles
@Component({
  selector: 'app-root', // Selector for the component in HTML
  templateUrl: './app.component.html', // Template URL for the component
  styleUrls: ['./app.component.scss'], // Style URLs for the component
})
export class AppComponent implements OnInit {
  // Component properties
  title = 'Portfolio'; // Title of the application
  year = new Date().getFullYear(); // Current year for footer
  author = 'Carissa Ward'; // Author name
  menuOpen = false; // Flag to track menu state

  // Filters for projects
  categoryFilter: Category | undefined; // Selected category filter
  tagFilter: Tag | undefined; // Selected tag filter

  // Selected project details
  selectedProject?: Project; // Currently selected project

  constructor(private router: Router) {} // Injecting Router for navigation

  ngOnInit(): void {
    // Subscribe to router events to close menu on navigation
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd && this.menuOpen) {
        this.toggleMenu(); // Close menu if it's open on navigation end
      }
    });
  }

  // Method to set category filter
  setCategoryFilter(category: Category): void {
    // Toggle category filter based on current state
    this.categoryFilter = this.categoryFilter === category ? undefined : category;
  }

  // Method to set tag filter
  setTagFilter(tag: Tag): void {
    // Toggle tag filter based on current state
    this.tagFilter = this.tagFilter === tag ? undefined : tag;
  }

  // Method to clear all filters
  clearFilters(): void {
    this.categoryFilter = undefined; // Clear category filter
    this.tagFilter = undefined; // Clear tag filter
  }

  // Method to set the selected project
  setSelectedProject(project: Project): void {
    this.selectedProject = project; // Set the selected project
  }

  // Method to clear the selected project
  clearSelectedProject(): void {
    this.selectedProject = undefined; // Clear the selected project
  }

  // TrackBy function for *ngFor to improve rendering performance
  trackByFn(index: number, project: Project): number {
    return project.id; // Return the project ID for tracking
  }

  // Method to toggle the menu state
  toggleMenu(): void {
    this.menuOpen = !this.menuOpen; // Toggle the menu state
  }
}