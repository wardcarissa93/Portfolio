// Importing necessary Angular modules and classes
import { Component } from '@angular/core';
import { CommonModule, Location } from '@angular/common'; // CommonModule and Location for browser-related functionalities
import { ActivatedRoute } from '@angular/router'; // ActivatedRoute for accessing route parameters

import { ProjectService } from '../../services/project.service'; // Importing ProjectService for project-related operations
import { Project } from '../../models/project'; // Importing Project model

// Component decorator with selector, template, and styles
@Component({
  selector: 'app-project', // Selector for the component in HTML
  standalone: true, // Indicates that this component is standalone and does not depend on external state
  imports: [CommonModule], // Importing CommonModule for browser-independent features
  templateUrl: './project.component.html', // Template URL for the component
  styleUrl: './project.component.scss' // Style URL for the component
})
export class ProjectComponent {
  constructor(
    private route: ActivatedRoute, // Injecting ActivatedRoute for accessing route parameters
    private projectService: ProjectService, // Injecting ProjectService for project-related operations
    private location: Location, // Injecting Location for browser-related navigation
  ) {}

  project?: Project; // Property to hold the project details

  // Method to fetch the project details based on route parameter
  getProject(): void {
    // Extract the 'id' route parameter and convert it to a number
    const id = Number(this.route.snapshot.paramMap.get('id'));

    // Call ProjectService to get the project with the extracted id
    this.projectService.getProject(id)
      .subscribe(project => this.project = project); // Subscribe to the Observable to get the project data
  }

  // Call getProject() method in the ngOnInit lifecycle hook
  ngOnInit(): void {
    this.getProject(); // Fetch the project details when the component initializes
  }

  // Method to navigate back to the previous page
  goBack(): void {
    this.location.back(); // Use Location service to navigate back in the browser history
  }

  // Method to open the project's URL in a new tab
  navigateToUrl(url: string): void {
    window.open(url, '_blank'); // Open the URL in a new browser tab
  }
}
